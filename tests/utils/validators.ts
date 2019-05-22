import 'jest-extended';
import handleValidators from '../../src/utils/validators';

describe('Validators', () => {
  it('check all validators returned function', () => {
    ['required', 'number', 'integer', 'email', 'min:5'].forEach(it => {
      expect(handleValidators(it)).toBeFunction();
    });
  });
  it('check return undefined not find validator', () => {
    expect(handleValidators('other')).toBeUndefined();
  });

  describe('Required', () => {
    const fncRequired = handleValidators('required');
    it('check required validator without values', () => {
      ['', undefined, null, [], {}].forEach(it => {
        expect(fncRequired(it)).toBeDefined();
      });
    });
    it('check required validator with values', () => {
      ['a', 123, 25.15, ['a'], { a: 0 }].forEach(it => {
        expect(fncRequired(it)).toBeUndefined();
      });
    });
  });

  describe('Number', () => {
    const fncNumber = handleValidators('number');
    it('check invalid numbers', () => {
      ['a', NaN].forEach(it => {
        expect(fncNumber(it)).toBeDefined();
      });
    });

    it('check valid numbers', () => {
      ['123', 120.59, 120].forEach(it => {
        expect(fncNumber(it)).toBeUndefined();
      });
    });
  });
});
