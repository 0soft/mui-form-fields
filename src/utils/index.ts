import isPlainObject from 'is-plain-object';
import { createNumberMask as _createNumberMask } from 'text-mask-addons';
import handleFormatter from './formatters';
import handleParser from './parsers';
import handleValidator from './validators';

interface Key {
  [key: string]: any;
}

export const createNumberMask = (options: Object = {}) => {
  const opt = {
    prefix: '$ ',
    thousandsSeparatorSymbol: ',',
    decimalSymbol: '.',
    allowNegative: true,
    ...options,
  };

  return _createNumberMask(opt);
};

export const getFnc = function<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
};

export const setFocus = (e: any) => {
  const target = e.currentTarget;
  const input = target.parentNode.querySelector('input');
  input && input.focus();
};

export const isExtendable = (value: any) => {
  return (
    isPlainObject(value) || typeof value === 'function' || Array.isArray(value)
  );
};

export const omit = (
  obj: any,
  props: string | string[],
  fn?: (value: any, key: string, object: any) => boolean
) => {
  if (!isExtendable(obj)) {
    return {};
  }

  if (typeof props === 'function') {
    fn = props;
    props = [];
  }

  if (typeof props === 'string') {
    props = [props];
  }

  const isFunction = typeof fn === 'function';
  const keys = Object.keys(obj);
  const res: Key = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = obj[key];

    if (
      !props ||
      (props.indexOf(key) === -1 && (!isFunction || (fn && fn(val, key, obj))))
    ) {
      res[key] = val;
    }
  }
  return res;
};

export { handleFormatter, handleParser, handleValidator };
