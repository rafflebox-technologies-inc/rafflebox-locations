import { validatePostal } from '../src/zip-postal-codes';

describe('canada postal codes', () => {
  describe('AB', () => {
    it('valid postal code', () => {
      expect(validatePostal('AB', 'T')).toBe(true);
      expect(validatePostal('AB', 't')).toBe(true);
      expect(validatePostal('AB', 'T')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('AB', 'S')).toBe(false);
    });
  });

  describe('BC', () => {
    it('valid postal code', () => {
      expect(validatePostal('BC', 'V')).toBe(true);
      expect(validatePostal('BC', 'v')).toBe(true);
      expect(validatePostal('BC', 'V')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('BC', 'S')).toBe(false);
    });
  });

  describe('MB', () => {
    it('valid postal code', () => {
      expect(validatePostal('MB', 'R')).toBe(true);
      expect(validatePostal('MB', 'r')).toBe(true);
      expect(validatePostal('MB', 'R')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('MB', 'S')).toBe(false);
    });
  });

  describe('NB', () => {
    it('valid postal code', () => {
      expect(validatePostal('NB', 'E')).toBe(true);
      expect(validatePostal('NB', 'e')).toBe(true);
      expect(validatePostal('NB', 'E')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NB', 'S')).toBe(false);
    });
  });

  describe('NL', () => {
    it('valid postal code', () => {
      expect(validatePostal('NL', 'A')).toBe(true);
      expect(validatePostal('NL', 'a')).toBe(true);
      expect(validatePostal('NL', 'A')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NL', 'S')).toBe(false);
    });
  });

  describe('NS', () => {
    it('valid postal code', () => {
      expect(validatePostal('NS', 'B')).toBe(true);
      expect(validatePostal('NS', 'b')).toBe(true);
      expect(validatePostal('NS', 'B')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NS', 'S')).toBe(false);
    });
  });

  describe('NT', () => {
    it('valid postal code', () => {
      expect(validatePostal('NT', 'X')).toBe(true);
      expect(validatePostal('NT', 'x')).toBe(true);
      expect(validatePostal('NT', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NT', 'S')).toBe(false);
    });
  });
  describe('NU', () => {
    it('valid postal code', () => {
      expect(validatePostal('NU', 'X')).toBe(true);
      expect(validatePostal('NU', 'x')).toBe(true);
      expect(validatePostal('NU', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NU', 'S')).toBe(false);
    });
  });

  describe('ON', () => {
    it('valid postal code', () => {
      expect(validatePostal('ON', 'K')).toBe(true);
      expect(validatePostal('ON', 'k')).toBe(true);
      expect(validatePostal('ON', 'K')).toBe(true);
      expect(validatePostal('ON', 'L')).toBe(true);
      expect(validatePostal('ON', 'N')).toBe(true);
      expect(validatePostal('ON', 'M')).toBe(true);
      expect(validatePostal('ON', 'P')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('ON', 'S')).toBe(false);
    });
  });

  describe('QC', () => {
    it('valid postal code', () => {
      expect(validatePostal('QC', 'G')).toBe(true);
      expect(validatePostal('QC', 'g')).toBe(true);
      expect(validatePostal('QC', 'G')).toBe(true);
      expect(validatePostal('QC', 'H')).toBe(true);
      expect(validatePostal('QC', 'J')).toBe(true);
      expect(validatePostal('QC', 'K')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('QC', 'S')).toBe(false);
    });
  });

  describe('YT', () => {
    it('valid postal code', () => {
      expect(validatePostal('YT', 'Y')).toBe(true);
      expect(validatePostal('YT', 'y')).toBe(true);
      expect(validatePostal('YT', 'Y')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('YT', 'S')).toBe(false);
    });
  });
  describe('PE', () => {
    it('valid postal code', () => {
      expect(validatePostal('PE', 'C')).toBe(true);
      expect(validatePostal('PE', 'c')).toBe(true);
      expect(validatePostal('PE', 'C')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('PE', 'S')).toBe(false);
    });
  });
});
