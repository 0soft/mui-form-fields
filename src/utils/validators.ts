import { getFnc } from './index';

export type FieldValidator = (value: any) => any | undefined;

interface Validators {
  required: FieldValidator;
  number: FieldValidator;
  integer: FieldValidator;
  email: FieldValidator;
  min: ((min: number) => FieldValidator) | null;
}

const validators: Validators = {
  required: (value: any) => {
    if (typeof value === 'string') {
      value = value.trim();
    }
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value === '__null__' ||
      (Array.isArray(value) && !value.length) ||
      (Object.entries(value).length === 0 && value.constructor === Object)
    ) {
      return 'Required';
    }

    return undefined;
  },
  number: (value: any) => {
    if ((value && isNaN(Number(value))) || isNaN(value)) {
      return 'Must be a number';
    }

    return undefined;
  },
  integer: (value: any) => {
    if (value && !Number.isInteger(Number(value))) {
      return 'Must be an integer';
    }

    return undefined;
  },
  email: (value: any) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Invalid email address';
    }

    return undefined;
  },
  min: (min: number) => (value: any) => {
    if (value && value.length < min) {
      return `Must contain at least ${min} characters`;
    }

    return undefined;
  },
};

const composeValidators = (validators: FieldValidator[]) => (value: any) =>
  validators.reduce(
    (error: Boolean, validator: FieldValidator) =>
      error || (validator && validator(value)),
    undefined
  );

export const handleValidator = (validate: string) => {
  let validatorFnc: FieldValidator[] = [];

  validate.split('|').forEach((it: string) => {
    switch (it.split(':')[0]) {
      case 'required':
        return validatorFnc.push(getFnc(validators, 'required'));
      case 'number':
        return validatorFnc.push(getFnc(validators, 'number'));
      case 'integer':
        return validatorFnc.push(getFnc(validators, 'integer'));
      case 'email':
        return validatorFnc.push(getFnc(validators, 'email'));
      case 'min':
        if (it.split(':')[1]) {
          const fnMin = getFnc(validators, 'min');
          if (fnMin) {
            return validatorFnc.push(fnMin && fnMin(Number(it.split(':')[1])));
          }
          return;
        }
        return;
      default:
        return;
    }
  });

  if (validatorFnc.length) {
    return composeValidators(validatorFnc);
  }

  return undefined;
};

export default handleValidator;
