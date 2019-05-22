import handleParser, { FieldParser } from './parsers';
import handleValidator, { FieldValidator } from './validators';
import handleFormatter, { FieldFormatter } from './formatters';

const getFnc = function<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
};

const setFocus = (e: any) => {
  const target = e.currentTarget;
  const input = target.parentNode.querySelector('input');
  input && input.focus();
};

export {
  handleFormatter,
  handleParser,
  handleValidator,
  getFnc,
  FieldValidator,
  FieldFormatter,
  FieldParser,
  setFocus,
};
