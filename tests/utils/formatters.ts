import 'jest-extended';
import handleFormatters, { FormatterOptions } from '../../src/utils/formatters';

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
    [1, '1', 1.1, '1.1'].forEach(it => {
      expect(formatter(it)).toEqual('1%');
    });
    [1000, '1,000', '1000'].forEach(it => {
      expect(formatter(it)).toEqual('1,000%');
    });
    [1000000, '1,000,000.0', '1000000.0'].forEach(it => {
      expect(formatter(it)).toEqual('1,000,000%');
    });
    ['a', undefined, null, [], {}].forEach(it => {
      expect(formatter(it)).toEqual('0%');
    });
  });
  describe('Money', () => {
    const formatter = handleFormatters('money');
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
    ['a', undefined, null, [], {}].forEach(it => {
      expect(formatter(it)).toEqual('$ 0.00');
    });
  });
  describe('String', () => {
    const formatter = handleFormatters('string');
    [undefined, null, NaN, {}].forEach(it => {
      expect(formatter(it)).toBeUndefined();
    });
    ['', [], 1, 1.1].forEach(it => {
      expect(formatter(it)).toEqual(it.toString());
    });
  });
  describe('Date', () => {
    const formatter = handleFormatters('date');
    [undefined, null, 'a', [], {}].forEach(it => {
      expect(formatter(it)).toBeUndefined();
    });
    ['2019-07-01T13:18:48', '2019-07-01'].forEach(it => {
      expect(formatter(it)).toEqual('2019-07-01');
    });
  });
  describe('Date and Time', () => {
    const formatter = handleFormatters('dateTime');
    [undefined, null, 'a', [], {}].forEach(it => {
      expect(formatter(it)).toBeUndefined();
    });
    ['2019-07-01T13:18:48'].forEach(it => {
      expect(formatter(it)).toEqual('2019-07-01T13:18:48-03:00');
    });
    ['2019-07-01'].forEach(it => {
      expect(formatter(it)).toEqual('2019-07-01T00:00:00-03:00');
    });
  });
});
