import { getFnc } from './index';
import moment from 'moment';

export type FieldParser = (value: any) => any | undefined;
export type ParserOptions = 'integer' | 'float' | 'money' | 'percentage' | 'date';

interface Parsers {
  integer: FieldParser;
  float: FieldParser;
  date: FieldParser;
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
