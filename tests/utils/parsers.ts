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
    ['a', null, undefined, [], {}].forEach(it => {
      expect(parser(it)).toEqual(0);
    });
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
  describe('Integer', () => {
    const parser = handleParsers('integer');
    [1, 1.1, '1', '1.1', '1a1', '1.a1'].forEach(it => {
      expect(parser(it)).toEqual(1);
    });
    ['a', 'a1', null, undefined, [], {}].forEach(it => {
      expect(parser(it)).toEqual(0);
    });
  });
  describe('Date', () => {
    const parser = handleParsers('date');
    ['2019-07-01', '01/07/2019', '01/07/19', '01072019', '01-07-2019'].forEach(it => {
      expect(moment.isMoment(parser(it))).toBeTrue();
    });
    ['a', null, undefined, [], {}].forEach(it => {
      expect(moment.isMoment(parser(it))).toBeFalse();
    });
  });
  describe('Percentage', () => {
    const parser = handleParsers('percentage');
    ['a%', null, undefined, [], {}].forEach(it => {
      expect(parser(it)).toBe(0);
    });
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
  describe('Money', () => {
    const parser = handleParsers('money');
    ['$a', null, undefined, [], {}].forEach(it => {
      expect(parser(it)).toBe(0);
    });
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
