import { getFnc } from './index';

interface Parsers {
  integer: ((value: any, name: string) => any) | null | undefined;
  float: ((value: any, name: string) => any) | null | undefined;
}

const parsers: Parsers = {
  float: (value: any) => {
    return (
      parseFloat(
        (value || '')
          .toString()
          .replace(new RegExp('[^0-9$.-]', 'g'), '')
          .replace('.', '.')
      ) || 0
    );
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
