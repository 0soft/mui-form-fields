import handleParser from './parsers';
import handleValidator, { FieldValidator } from './validators';
import handleFormatter from './formatters';

const getFnc = function<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
};

export {
  handleFormatter,
  handleParser,
  handleValidator,
  getFnc,
  FieldValidator,
};
