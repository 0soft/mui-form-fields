import { getFnc } from './helpers';
import moment from 'moment';

export type FieldParser = (value: any) => any | undefined;
export type ParserOptions =
  | 'integer'
  | 'float'
  | 'money'
  | 'percentage'
  | 'date'
  | 'dateTime'
  | undefined;

interface Parsers {
  integer: FieldParser;
  float: FieldParser;
  date: FieldParser;
  dateTime: FieldParser;
}

const parsers: Parsers = {
  float: (value: any) => {
    const response = (value || '').toString().replace(new RegExp('[^0-9.-]', 'g'), '');
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
    return moment(value, ['YYYY-MM-DD', 'DD/MM/YYYY', 'DD/MM/YY', 'DDMMYYYY', 'DD-MM-YYYY']);
  },
  dateTime: (value: any) => {
    if (!value) {
      return value;
    }
    return moment(value, [
      moment.ISO_8601,
      'YYYY-MM-DD HH:mm:ss',
      'DD/MM/YYYY HH:mm:ss',
      'DD/MM/YY HH:mm:ss',
      'HHmmssDDMMYYYY',
      'HH:mm:ss DD-MM-YYYY',
    ]);
  },
};

const handleParser = (parse: ParserOptions) => {
  if (parse === undefined) {
    return undefined;
  }

  if (parse === 'percentage' || parse === 'money') {
    parse = 'float';
  }

  return getFnc(parsers, parse);
};

export default handleParser;
