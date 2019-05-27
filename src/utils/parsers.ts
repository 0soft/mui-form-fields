import { getFnc } from './index';

export type FieldParser = (value: any) => any | undefined;

interface Parsers {
  integer: FieldParser;
  float: FieldParser;
}

const parsers: Parsers = {
  float: (value: any) => {
    const response = (value || '')
      .toString()
      .replace(new RegExp('[^0-9.-]', 'g'), '');
    return parseFloat(response) || 0;
  },
  integer: (value: any) => {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  },
};

export const handleParser = (parse: string) => {
  switch (parse) {
    case 'integer':
      return getFnc(parsers, 'integer');
    case 'float':
    case 'money':
    case 'percentage':
      return getFnc(parsers, 'float');
    default:
      return undefined;
  }
};

export default handleParser;
