import { getFnc } from './helpers';

export type FieldValidator = (value: any) => string | void | undefined;

interface Validators {
  required: FieldValidator;
  number: FieldValidator;
  integer: FieldValidator;
  email: FieldValidator;
  min: (min: number) => FieldValidator;
  max: (max: number) => FieldValidator;
  [key: string]: FieldValidator | ((...args: any[]) => FieldValidator);
}

const validators: Validators = {
  required: (value: any): string | void => {
    if (typeof value === 'string') {
      value = value.trim();
    }
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value === '__null__' ||
      (typeof value === 'number' && validators.number(value) != null) ||
      (Array.isArray(value) && (!value.length || validators.required(value[0]) != null)) ||
      (Object.entries(value).length === 0 && value.constructor === Object)
    ) {
      return 'Required';
    }
  },
  number: (value: any): string | void => {
    const nvalue = Number(value);
    if (isNaN(nvalue) || !isFinite(nvalue)) {
      return 'Must be a number';
    }
  },
  integer: (value: any): string | void => {
    if (validators.number(value) || !Number.isSafeInteger(Number(value))) {
      return 'Must be an integer';
    }
  },
  email: (value: any): string | void => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Invalid email address';
    }
  },
  min: (min: number) => (value: any): string | void => {
    if (validators.required(value) || value.toString().length < min) {
      return `Must contain at least ${min} characters`;
    }
  },
  max: (max: number) => (value: any): string | void => {
    if (value && value.toString().length > max) {
      return `Must contain at most ${max} characters`;
    }
  },
};

const composeValidators = (validators: FieldValidator[]) => (value: any) =>
  validators.reduce(
    (error: string | undefined, validator: FieldValidator) =>
      error || (validator && validator(value)),
    undefined
  );

const isFn = (fn: any) => {
  return fn && {}.toString.call(fn) === '[object Function]';
};

const handleValidator = (validate: string) => {
  const fns = validate
    .split('|')
    .map((it: string) => {
      if (it == null) {
        return null;
      }
      const parts = it.split(':');
      const fn = getFnc(validators, parts[0].trim() as any);
      if (fn != null && parts.length > 1) {
        return fn.apply(null, parts.slice(1));
      } else if (fn == null || (fn != null && isFn(fn(undefined)))) {
        return null;
      }
      return fn;
    })
    .filter((it: FieldValidator | undefined) => it != null);
  return fns.length > 0 ? composeValidators(fns) : undefined;
};

export default handleValidator;
