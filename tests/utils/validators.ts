import 'jest-extended';
import handleValidators from '../../src/utils/validators';

describe('Validators', () => {
  it('should check if all validators return a function', () => {
    ['required', 'number', 'integer', 'email', 'min:5', 'max:5'].forEach(it => {
      expect(handleValidators(it)).toBeFunction();
    });
  });
  it('should check if non-existent or invalid validators return undefined', () => {
    ['other', 'min'].forEach(it => {
      expect(handleValidators(it)).toBeUndefined();
    });
  });

  describe('Required', () => {
    const fncRequired = handleValidators('required');
    it('should return a message when there is no value or an empty value', () => {
      ['', '__null__', undefined, null, [], [[]], [[[]]], {}, NaN, Infinity, -Infinity].forEach(
        it => {
          expect(fncRequired(it)).toBeDefined();
        }
      );
    });
    it('should return undefined when there is a valid value', () => {
      ['a', 123, 25.15, ['a'], { a: 0 }, 0, false].forEach(it => {
        expect(fncRequired(it)).toBeUndefined();
      });
    });
  });

  describe('Number', () => {
    const fncNumber = handleValidators('number');
    it('should return a message when the value is not a number', () => {
      ['a', NaN, Infinity, -Infinity].forEach(it => {
        expect(fncNumber(it)).toBeDefined();
      });
    });

    it('should return undefined when the value is a valid number', () => {
      ['123', 120.59, 120].forEach(it => {
        expect(fncNumber(it)).toBeUndefined();
      });
    });
  });

  describe('Integer', () => {
    const fncInteger = handleValidators('integer');
    it('should return a message when the value is not a safe integer', () => {
      [1.1, 1e16, 0x20000000000000].forEach(it => {
        expect(fncInteger(it)).toBeDefined();
      });
    });
    it('should return undefined when the value is a valid safe integer', () => {
      [0, 1e15, 0x19999999999999].forEach(it => {
        expect(fncInteger(it)).toBeUndefined();
      });
    });
  });

  describe('Email', () => {
    const fncEmail = handleValidators('email');
    it('should return a message when the value is not a valid email', () => {
      ['a', 'foo@', 'foo@foo', 'foo@foo.c', 'foo.com'].forEach(it => {
        expect(fncEmail(it)).toBeDefined();
      });
    });
    it('should return undefined when the value is a valid email', () => {
      ['foo@foo.com', 'foo@foo.co'].forEach(it => {
        expect(fncEmail(it)).toBeUndefined();
      });
    });
  });

  describe('Minimum Length', () => {
    const fncMin = handleValidators('min:5');
    it('should return a message when the value has less than 5 characters', () => {
      ['', '123', '1234'].forEach(it => {
        expect(fncMin(it)).toBeDefined();
      });
    });
    it('should return undefined when the value has more than 5 characters', () => {
      ['12345', '123456'].forEach(it => {
        expect(fncMin(it)).toBeUndefined();
      });
    });
  });

  describe('Maximum Length', () => {
    const fncMax = handleValidators('max:5');
    it('should return a message when the value has more than 5 characters', () => {
      ['123456', '1234567'].forEach(it => {
        expect(fncMax(it)).toBeDefined();
      });
    });
    it('should return undefined when the value has less than 5 characters', () => {
      ['', '1234', '12345'].forEach(it => {
        expect(fncMax(it)).toBeUndefined();
      });
    });
  });
});
