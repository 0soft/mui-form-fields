import 'jest-extended';
import handleFormatters, { FormatterOptions } from '../../src/utils/formatters';
import moment = require('moment');

describe('Formatters', () => {
  it('should check if all validators return a function', () => {
    const formatters: FormatterOptions[] = ['percentage', 'money', 'date', 'dateTime'];
    formatters.forEach(it => {
      expect(handleFormatters(it)).toBeFunction();
    });
  });
  it('should check if non-existent or invalid validators return undefined', () => {
    ['other', undefined].forEach(it => {
      expect(handleFormatters(it)).toBeUndefined();
    });
  });

  describe('Percentage', () => {
    const formatter = handleFormatters('percentage');
    it('should return formatted 0 for invalid values', () => {
      ['a', undefined, null, [], {}].forEach(it => {
        expect(formatter(it)).toEqual('0%');
      });
    });
    it('should return the correct formatted value for valid values', () => {
      [1, '1', 1.1, '1.1'].forEach(it => {
        expect(formatter(it)).toEqual('1%');
      });
      [1000, '1,000', '1000'].forEach(it => {
        expect(formatter(it)).toEqual('1,000%');
      });
      [1000000, '1,000,000.0', '1000000.0'].forEach(it => {
        expect(formatter(it)).toEqual('1,000,000%');
      });
    });
  });
  describe('Money', () => {
    const formatter = handleFormatters('money');
    it('should return formatted 0 for invalid values', () => {
      ['a', undefined, null, [], {}].forEach(it => {
        expect(formatter(it)).toEqual('$ 0.00');
      });
    });
    it('should return the correct formatted value for valid values', () => {
      [1, '1'].forEach(it => {
        expect(formatter(it)).toEqual('$ 1.00');
      });
      [1.1, '1.1'].forEach(it => {
        expect(formatter(it)).toEqual('$ 1.10');
      });
      [1000, '1,000', '1000'].forEach(it => {
        expect(formatter(it)).toEqual('$ 1,000.00');
      });
      [1000000, '1,000,000.0', '1000000.0'].forEach(it => {
        expect(formatter(it)).toEqual('$ 1,000,000.00');
      });
    });
  });
  describe('String', () => {
    const formatter = handleFormatters('string');
    it('should return undefined for invalid values', () => {
      [undefined, null, NaN, {}].forEach(it => {
        expect(formatter(it)).toBeUndefined();
      });
    });
    it('should return a string value for valid values', () => {
      ['', [], 1, 1.1].forEach(it => {
        expect(formatter(it)).toEqual(it.toString());
      });
    });
  });
  describe('Date', () => {
    const formatter = handleFormatters('date');
    it('should return undefined for invalid values', () => {
      [undefined, null, 'a', [], {}].forEach(it => {
        expect(formatter(it)).toBeUndefined();
      });
    });
    it('should return a YYYY-MM-DD formatted date for valid values', () => {
      ['2019-07-01T13:18:48', '2019-07-01'].forEach(it => {
        expect(formatter(it)).toEqual('2019-07-01');
      });
    });
  });
  describe('Date and Time', () => {
    const formatter = handleFormatters('dateTime');
    it('should return undefined for invalid values', () => {
      [undefined, null, 'a', [], {}].forEach(it => {
        expect(formatter(it)).toBeUndefined();
      });
    });
    it('should return a ISO 8601 date time for valid values', () => {
      ['2019-07-01T13:18:48'].forEach(it => {
        expect(formatter(it).substr(0, 19)).toEqual('2019-07-01T13:18:48');
      });
      ['2019-07-01'].forEach(it => {
        expect(formatter(it).substr(0, 19)).toEqual('2019-07-01T00:00:00');
      });
    });
  });
});
