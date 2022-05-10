import validatePostal from '../src/ca-postal-codes';

describe('canada postal codes', () => {
  describe('AB', () => {
    it('valid postal code', () => {
      expect(validatePostal('Alberta', 'T')).toBe(true);
      expect(validatePostal('ab', 't')).toBe(true);
      expect(validatePostal('AB', 'T')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('AB', 'S')).toBe(false);
    });
  });

  describe('BC', () => {
    it('valid postal code', () => {
      expect(validatePostal('British Columbia', 'V')).toBe(true);
      expect(validatePostal('bc', 'v')).toBe(true);
      expect(validatePostal('BC', 'V')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('BC', 'S')).toBe(false);
    });
  });

  describe('MB', () => {
    it('valid postal code', () => {
      expect(validatePostal('Manitoba', 'R')).toBe(true);
      expect(validatePostal('mb', 'r')).toBe(true);
      expect(validatePostal('MB', 'R')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('MB', 'S')).toBe(false);
    });
  });

  describe('NB', () => {
    it('valid postal code', () => {
      expect(validatePostal('New Brunswick', 'E')).toBe(true);
      expect(validatePostal('nb', 'e')).toBe(true);
      expect(validatePostal('NB', 'E')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NB', 'S')).toBe(false);
    });
  });

  describe('NL', () => {
    it('valid postal code', () => {
      expect(validatePostal('Newfoundland', 'A')).toBe(true);
      expect(validatePostal('nl', 'a')).toBe(true);
      expect(validatePostal('NL', 'A')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NL', 'S')).toBe(false);
    });
  });

  describe('NS', () => {
    it('valid postal code', () => {
      expect(validatePostal('Nova Scotia', 'B')).toBe(true);
      expect(validatePostal('ns', 'b')).toBe(true);
      expect(validatePostal('NS', 'B')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NS', 'S')).toBe(false);
    });
  });

  describe('NT', () => {
    it('valid postal code', () => {
      expect(validatePostal('Northwest Territories', 'X')).toBe(true);
      expect(validatePostal('nt', 'x')).toBe(true);
      expect(validatePostal('NT', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NT', 'S')).toBe(false);
    });
  });
  describe('NU', () => {
    it('valid postal code', () => {
      expect(validatePostal('Nunavut', 'X')).toBe(true);
      expect(validatePostal('nu', 'x')).toBe(true);
      expect(validatePostal('NU', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('NU', 'S')).toBe(false);
    });
  });

  describe('ON', () => {
    it('valid postal code', () => {
      expect(validatePostal('Ontario', 'K')).toBe(true);
      expect(validatePostal('on', 'k')).toBe(true);
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
      expect(validatePostal('Quebec', 'G')).toBe(true);
      expect(validatePostal('qc', 'g')).toBe(true);
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
      expect(validatePostal('Yukon', 'Y')).toBe(true);
      expect(validatePostal('yt', 'y')).toBe(true);
      expect(validatePostal('YT', 'Y')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('YT', 'S')).toBe(false);
    });
  });
  describe('PE', () => {
    it('valid postal code', () => {
      expect(validatePostal('Prince Edward Island', 'C')).toBe(true);
      expect(validatePostal('pe', 'c')).toBe(true);
      expect(validatePostal('PE', 'C')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validatePostal('PE', 'S')).toBe(false);
    });
  });
});
