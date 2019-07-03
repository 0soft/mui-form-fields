import 'jest-extended';
import handleParsers, { ParserOptions } from '../../src/utils/parsers';
import moment = require('moment');

describe('Parsers', () => {
  it('should check if all parsers return a function', () => {
    const parsers: ParserOptions[] = ['integer', 'float', 'money', 'percentage', 'date'];
    parsers.forEach(it => {
      expect(handleParsers(it)).toBeFunction();
    });
  });
  it('should check if non-existent or invalid validators return undefined', () => {
    ['other', undefined].forEach(it => {
      expect(handleParsers(it)).toBeUndefined();
    });
  });

  describe('Float', () => {
    const parser = handleParsers('float');
    it('should return 0 for invalid numbers', () => {
      ['a', null, undefined, [], {}].forEach(it => {
        expect(parser(it)).toEqual(0);
      });
    });
    it('should return the correct value when it has a valid number', () => {
      [-1, '-1', '-a1', '-1a'].forEach(it => {
        expect(parser(it)).toEqual(-1);
      });
      [1, '1', 'a1', '1a', '1-'].forEach(it => {
        expect(parser(it)).toEqual(1);
      });
      [1.1, '1.1', 'a1.1', '1.a1', '1.1-'].forEach(it => {
        expect(parser(it)).toEqual(1.1);
      });
      [-1.1, '-1.1', '-a1.1', '-1.a1'].forEach(it => {
        expect(parser(it)).toEqual(-1.1);
      });
      expect(parser('1a1')).toEqual(11);
    });
  });
  describe('Integer', () => {
    const parser = handleParsers('integer');
    it('should return 0 for invalid numbers', () => {
      ['a', 'a1', null, undefined, [], {}].forEach(it => {
        expect(parser(it)).toEqual(0);
      });
    });
    it('should return the correct value for valid numbers', () => {
      [1, 1.1, '1', '1.1', '1a1', '1.a1'].forEach(it => {
        expect(parser(it)).toEqual(1);
      });
    });
  });
  describe('Date', () => {
    const parser = handleParsers('date');
    it('should return undefined for invalid values', () => {
      ['a', null, undefined, [], {}].forEach(it => {
        expect(moment.isMoment(parser(it))).toBeFalse();
      });
    });
    it('should return a moment object for valid dates', () => {
      ['2019-07-01', '01/07/2019', '01/07/19', '01072019', '01-07-2019'].forEach(it => {
        expect(moment.isMoment(parser(it))).toBeTrue();
      });
    });
  });
  describe('Date and Time', () => {
    const parser = handleParsers('date');
    it('should return undefined for invalid values', () => {
      ['a', null, undefined, [], {}].forEach(it => {
        expect(moment.isMoment(parser(it))).toBeFalse();
      });
    });
    it('should return a moment object for valid date times', () => {
      [
        '2019-07-01T14:36:45',
        '2019-07-01 14:36:45',
        '01/07/2019 14:36:45',
        '01/07/19 14:36:45',
        '14:36:45 01-07-2019',
      ].forEach(it => {
        expect(moment.isMoment(parser(it))).toBeTrue();
      });
    });
  });
  describe('Percentage', () => {
    const parser = handleParsers('percentage');
    it('should return 0 for invalid values', () => {
      ['a%', null, undefined, [], {}].forEach(it => {
        expect(parser(it)).toBe(0);
      });
    });
    it('should return the float value for valid values', () => {
      ['a1%', '1%'].forEach(it => {
        expect(parser(it)).toBe(1);
      });
      ['1.1%', '1%.a1', '1.a1%'].forEach(it => {
        expect(parser(it)).toBe(1.1);
      });
      ['1%a1', '1a1%'].forEach(it => {
        expect(parser(it)).toBe(11);
      });
    });
  });
  describe('Money', () => {
    const parser = handleParsers('money');
    it('should return 0 for invalid values', () => {
      ['$a', null, undefined, [], {}].forEach(it => {
        expect(parser(it)).toBe(0);
      });
    });
    it('should return the float value for valid values', () => {
      ['$a1', '$1'].forEach(it => {
        expect(parser(it)).toBe(1);
      });
      ['$1.1', '$1.a1', '$1.a1'].forEach(it => {
        expect(parser(it)).toBe(1.1);
      });
      ['$1a1', '$a11'].forEach(it => {
        expect(parser(it)).toBe(11);
      });
    });
  });
});
