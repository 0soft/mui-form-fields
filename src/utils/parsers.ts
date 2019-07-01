import { getFnc } from './helpers';
import moment from 'moment';

export type FieldParser = (value: any) => any | undefined;
export type ParserOptions = 'integer' | 'float' | 'money' | 'percentage' | 'date' | 'dateTime';

interface Parsers {
  integer: FieldParser;
  float: FieldParser;
  date: FieldParser;
  dateTime: FieldParser;
  [key: string]: FieldParser;
}

const aliases: { [key: string]: ParserOptions } = {
  percentage: 'float',
  money: 'float',
};

const parsers: Parsers = {
  float: (value: any) => {
    const response = (value || '').toString().replace(new RegExp('[^0-9.-]', 'g'), '');
    return parseFloat(response) || 0;
  },
  integer: (value: any) => {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
  },
  date: (value: any) => {
    if (!value) {
      return null;
    }
    const parsed = moment(value, [
      'YYYY-MM-DD',
      'DD/MM/YYYY',
      'DD/MM/YY',
      'DDMMYYYY',
      'DD-MM-YYYY',
    ]);
    return parsed.isValid() ? parsed : null;
  },
  dateTime: (value: any) => {
    if (!value) {
      return value;
    }
    const parsed = moment(value, [
      moment.ISO_8601,
      'YYYY-MM-DD HH:mm:ss',
      'DD/MM/YYYY HH:mm:ss',
      'DD/MM/YY HH:mm:ss',
      'HHmmssDDMMYYYY',
      'HH:mm:ss DD-MM-YYYY',
    ]);
    return parsed.isValid() ? parsed : null;
  },
};

export const handleParser = (parse: ParserOptions) => {
  if (aliases.hasOwnProperty(parse)) {
    parse = aliases[parse];
  }
  if (parse == null) {
    return;
  }
  return getFnc(parsers, parse);
};

export default handleParser;
