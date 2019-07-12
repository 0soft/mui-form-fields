import { getFnc } from './helpers';
import handleParser from './parsers';

export type FieldFormatter = (value: any) => any | undefined;
export type FormatterOptions = 'percentage' | 'money' | 'string' | 'date' | 'dateTime' | 'integer';

interface Formatters {
  integer: FieldFormatter;
  percentage: FieldFormatter;
  money: FieldFormatter;
  string: FieldFormatter;
  date: FieldFormatter;
  dateTime: FieldFormatter;
  [key: string]: FieldFormatter;
}

interface DecimalFormatterOptions {
  prefix?: string;
  suffix?: string;
  lengthDecimal?: number;
  lengthWholePart?: number;
  sectionDelimiter?: string;
  decimalDelimiter?: string;
}

const integerParser = handleParser('integer')!;
const floatParser = handleParser('float')!;
const dateParser = handleParser('date')!;
const dateTimeParser = handleParser('dateTime')!;

const decimalFormatter = (val?: number, options?: DecimalFormatterOptions): string | void => {
  if (val == null) {
    return;
  }

  const {
    prefix = null,
    suffix = null,
    lengthDecimal = 2,
    lengthWholePart = 3,
    sectionDelimiter = ',',
    decimalDelimiter = '.',
  } = options || {};

  const decimal = lengthDecimal > 0 ? '\\D' : '$';
  const re = new RegExp(`\\d(?=(\\d{${lengthWholePart}})+${decimal})`, 'g');

  let num: string = val.toFixed(Math.max(0, ~~lengthDecimal));
  num = decimalDelimiter != null ? num.replace('.', decimalDelimiter) : num;
  num = num.replace(re, '$&' + sectionDelimiter);
  return `${prefix || ''}${num}${suffix || ''}`;
};

const formatters: Formatters = {
  percentage: (value: any) => {
    return decimalFormatter(floatParser(value), { suffix: '%', lengthDecimal: 0 });
  },
  integer: (value: any) => {
    return decimalFormatter(integerParser(value), { lengthDecimal: 0 });
  },
  money: (value: any) => {
    return decimalFormatter(floatParser(value), { prefix: '$ ' });
  },
  string: (value: any) => {
    if (value != null && !isNaN(value)) {
      return value.toString();
    }
  },
  date: (value: any) => {
    if (value != null) {
      const date = dateParser(value);
      return date != null && date.isValid() ? date.format('YYYY-MM-DD') : undefined;
    }
  },
  dateTime: (value: any) => {
    if (value != null) {
      const date = dateTimeParser(value);
      return date != null && date.isValid() ? date.format() : undefined;
    }
  },
};

export const handleFormatter = (formatter: FormatterOptions) => {
  if (formatter == null) {
    return;
  }

  return getFnc(formatters, formatter);
};

export default handleFormatter;
