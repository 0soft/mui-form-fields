import { getFnc } from './index';
import moment from 'moment';

export type FieldFormatter = (value: any) => any | undefined;

interface Formatters {
  percentage: FieldFormatter;
  money: FieldFormatter;
  string: FieldFormatter;
  date: FieldFormatter;
}

const number = (
  number: any,
  lengthDecimal: number = 2,
  lengthWholePart: number = 3,
  sectionDelimiter: string = ',',
  decimalDelimiter: string = '.'
) => {
  if (typeof number === 'string') {
    number = parseFloat(number);
  }

  if (!number && number !== 0) {
    return '0';
  }

  var re =
      '\\d(?=(\\d{' +
      (lengthWholePart || 3) +
      '})+' +
      (lengthDecimal > 0 ? '\\D' : '$') +
      ')',
    num = number.toFixed(Math.max(0, ~~lengthDecimal));

  return (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(
    new RegExp(re, 'g'),
    '$&' + sectionDelimiter
  );
};

const formatters: Formatters = {
  percentage: (value: any) => {
    let formatted = number(value);

    if (!formatted) {
      return '';
    }

    return `${formatted}%`;
  },
  money: (value: any) => {
    let formatted = number(value);

    if (!formatted) {
      return '';
    }

    return `$ ${formatted}`;
  },
  string: (value: any) => {
    if (value === null || value === undefined || isNaN(value)) {
      value = '';
    }
    return value.toString();
  },
  date: (value: any) => {
    if (!value) {
      return value;
    }
    return moment(value).format('YYYY-MM-DD');
  },
};

export const handleFormatter = (formatter: string) => {
  switch (formatter) {
    case 'money':
      return getFnc(formatters, 'money');
    case 'percentage':
      return getFnc(formatters, 'percentage');
    case 'string':
      return getFnc(formatters, 'string');
    case 'date':
      return getFnc(formatters, 'date');
    default:
      return undefined;
  }
};

export default handleFormatter;
