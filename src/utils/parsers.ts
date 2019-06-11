import { getFnc } from './index';
import moment from 'moment';

export type FieldParser = (value: any) => any | undefined;
export type ParserOptions =
  | 'integer'
  | 'float'
  | 'money'
  | 'percentage'
  | 'date'
  | undefined;

interface Parsers {
  integer: FieldParser;
  float: FieldParser;
  date: FieldParser;
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
  date: (value: any) => {
    if (!value) {
      return value;
    }
    return moment(value, [
      'YYYY-MM-DD',
      'DD/MM/YYYY',
      'DD/MM/YY',
      'DDMMYYYY',
      'DD-MM-YYYY',
    ]);
  },
};

export const handleParser = (parse: ParserOptions) => {
  if (parse === undefined) {
    return undefined;
  }

  if (parse === 'percentage' || parse === 'money') {
    parse = 'float';
  }

  return getFnc(parsers, parse);
};

export default handleParser;
