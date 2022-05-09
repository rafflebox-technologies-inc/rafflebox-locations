import validateCaPostalCodes from '../src/ca-postal-codes';

describe('canada postal codes', () => {

  describe('AB', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Alberta', 'T')).toBe(true);
      expect(validateCaPostalCodes('ab', 't')).toBe(true);
      expect(validateCaPostalCodes('AB', 'T')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('AB', 'S')).toBe(false);
    });
  });

  describe('BC', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('British Columbia', 'V')).toBe(true);
      expect(validateCaPostalCodes('bc', 'v')).toBe(true);
      expect(validateCaPostalCodes('BC', 'V')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('BC', 'S')).toBe(false);
    });
  });

  describe('MB', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Manitoba', 'R')).toBe(true);
      expect(validateCaPostalCodes('mb', 'r')).toBe(true);
      expect(validateCaPostalCodes('MB', 'R')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('MB', 'S')).toBe(false);
    });
  });

  describe('NB', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('New Brunswick', 'E')).toBe(true);
      expect(validateCaPostalCodes('nb', 'e')).toBe(true);
      expect(validateCaPostalCodes('NB', 'E')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('NB', 'S')).toBe(false);
    });
  });

  describe('NL', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Newfoundland', 'A')).toBe(true);
      expect(validateCaPostalCodes('nl', 'a')).toBe(true);
      expect(validateCaPostalCodes('NL', 'A')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('NL', 'S')).toBe(false);
    });
  });

  describe('NS', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Nova Scotia', 'B')).toBe(true);
      expect(validateCaPostalCodes('ns', 'b')).toBe(true);
      expect(validateCaPostalCodes('NS', 'B')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('NS', 'S')).toBe(false);
    });
  });

  describe('NT', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Northwest Territories', 'X')).toBe(true);
      expect(validateCaPostalCodes('nt', 'x')).toBe(true);
      expect(validateCaPostalCodes('NT', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('NT', 'S')).toBe(false);
    });
  });
  describe('NU', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Nunavut', 'X')).toBe(true);
      expect(validateCaPostalCodes('nu', 'x')).toBe(true);
      expect(validateCaPostalCodes('NU', 'X')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('NU', 'S')).toBe(false);
    });
  });

  describe('ON', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Ontario', 'K')).toBe(true);
      expect(validateCaPostalCodes('on', 'k')).toBe(true);
      expect(validateCaPostalCodes('ON', 'K')).toBe(true);
      expect(validateCaPostalCodes('ON', 'L')).toBe(true);
      expect(validateCaPostalCodes('ON', 'N')).toBe(true);
      expect(validateCaPostalCodes('ON', 'M')).toBe(true);
      expect(validateCaPostalCodes('ON', 'P')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('ON', 'S')).toBe(false);
    });
  });

  describe('QC', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Quebec', 'G')).toBe(true);
      expect(validateCaPostalCodes('qc', 'g')).toBe(true);
      expect(validateCaPostalCodes('QC', 'G')).toBe(true);
      expect(validateCaPostalCodes('QC', 'H')).toBe(true);
      expect(validateCaPostalCodes('QC', 'J')).toBe(true);
      expect(validateCaPostalCodes('QC', 'K')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('QC', 'S')).toBe(false);
    });
  });

  describe('YT', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Yukon', 'Y')).toBe(true);
      expect(validateCaPostalCodes('yt', 'y')).toBe(true);
      expect(validateCaPostalCodes('YT', 'Y')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('YT', 'S')).toBe(false);
    });
  });
  describe('PE', () => {

    it('valid postal code', () => {
      expect(validateCaPostalCodes('Prince Edward Island', 'C')).toBe(true);
      expect(validateCaPostalCodes('pe', 'c')).toBe(true);
      expect(validateCaPostalCodes('PE', 'C')).toBe(true);
    });
    it('invalid postal code', () => {
      expect(validateCaPostalCodes('PE', 'S')).toBe(false);
    });
  });
});
