import { validateZip } from '../src/zip-postal-codes';

describe('USA postal code', () => {
  describe('AL', () => {
    it('should validate zip code', () => {
      expect(validateZip('al', 35004)).toBe(true);
      expect(validateZip('AL', '35005')).toBe(true);
      expect(validateZip('al', '35005')).toBe(true);
      expect(validateZip('AL', '35004')).toBe(true);
      expect(validateZip('alabama', '35003')).toBe(false);
      expect(validateZip('AL', '36926')).toBe(false);
    });
  });
  describe('AK', () => {
    it('should validate zip code', () => {
      expect(validateZip('alaska', '99504')).toBe(true);
      expect(validateZip('ak', '99505')).toBe(true);
      expect(validateZip('AK', '99504')).toBe(true);
      expect(validateZip('alaska', '99960')).toBe(false);
      expect(validateZip('AK', '99950')).toBe(true);
      expect(validateZip('AK', '99951')).toBe(false);
    });
  });
  describe('AZ', () => {
    it('should validate zip code', () => {
      expect(validateZip('arizona', '85201')).toBe(true);
      expect(validateZip('az', '85202')).toBe(true);
      expect(validateZip('AZ', '85201')).toBe(true);
      expect(validateZip('arizona', '86557')).toBe(false);
      expect(validateZip('AZ', '85000')).toBe(false);
    });
  });
  describe('AR', () => {
    it('should validate zip code', () => {
      expect(validateZip('arkansas', '72401')).toBe(true);
      expect(validateZip('ar', '72402')).toBe(true);
      expect(validateZip('AR', '72401')).toBe(true);
      expect(validateZip('arkansas', '71400')).toBe(false);
      expect(validateZip('AR', '73400')).toBe(false);
    });
  });
  describe('CA', () => {
    it('should validate zip code', () => {
      expect(validateZip('california', '90002')).toBe(true);
      expect(validateZip('ca', '90003')).toBe(true);
      expect(validateZip('CA', '90002')).toBe(true);
      expect(validateZip('california', '90000')).toBe(false);
      expect(validateZip('CA', '96240')).toBe(false);
    });
  });
  describe('CO', () => {
    it('should validate zip code', () => {
      expect(validateZip('colorado', '80201')).toBe(true);
      expect(validateZip('co', '80202')).toBe(true);
      expect(validateZip('CO', '80201')).toBe(true);
      expect(validateZip('colorado', '82200')).toBe(false);
      expect(validateZip('CO', '80000')).toBe(false);
    });
  });
  describe('CT', () => {
    it('should validate zip code', () => {
      expect(validateZip('connecticut', '6001')).toBe(true);
      expect(validateZip('ct', '6002')).toBe(true);
      expect(validateZip('CT', '6001')).toBe(true);
      expect(validateZip('connecticut', '6000')).toBe(false);
      expect(validateZip('CT', '6937')).toBe(false);
    });
  });
  describe('DE', () => {
    it('should validate zip code', () => {
      expect(validateZip('delaware', '19901')).toBe(true);
      expect(validateZip('de', '19902')).toBe(true);
      expect(validateZip('DE', '19901')).toBe(true);
      expect(validateZip('delaware', '19700')).toBe(false);
      expect(validateZip('DE', '19990')).toBe(false);
    });
  });
  describe('FL', () => {
    it('should validate zip code', () => {
      expect(validateZip('florida', '33001')).toBe(true);
      expect(validateZip('fl', '33002')).toBe(true);
      expect(validateZip('FL', '33001')).toBe(true);
      expect(validateZip('florida', '32000')).toBe(false);
      expect(validateZip('FL', '35000')).toBe(false);
    });
  });
  describe('GA', () => {
    it('should validate zip code', () => {
      expect(validateZip('ga', '33001')).toBe(true);
      expect(validateZip('ga', '30302')).toBe(true);
      expect(validateZip('GA', '30301')).toBe(true);
      expect(validateZip('georgia', '30000')).toBe(false);
      expect(validateZip('GA', '40000')).toBe(false);
    });
  });
  describe('HI', () => {
    it('should validate zip code', () => {
      expect(validateZip('hawaii', '96800')).toBe(true);
      expect(validateZip('hi', '96702')).toBe(true);
      expect(validateZip('HI', '96701')).toBe(true);
      expect(validateZip('hawaii', '96000')).toBe(false);
      expect(validateZip('HI', '97700')).toBe(false);
    });
  });
  describe('ID', () => {
    it('should validate zip code', () => {
      expect(validateZip('idaho', '83401')).toBe(true);
      expect(validateZip('id', '83402')).toBe(true);
      expect(validateZip('ID', '83401')).toBe(true);
      expect(validateZip('idaho', '83000')).toBe(false);
      expect(validateZip('ID', '84000')).toBe(false);
    });
  });
  describe('IL', () => {
    it('should validate zip code', () => {
      expect(validateZip('illinois', '62401')).toBe(true);
      expect(validateZip('il', '62402')).toBe(true);
      expect(validateZip('IL', '62401')).toBe(true);
      expect(validateZip('illinois', '60000')).toBe(false);
      expect(validateZip('IL', '63000')).toBe(false);
    });
  });
  describe('IN', () => {
    it('should validate zip code', () => {
      expect(validateZip('indiana', '46201')).toBe(true);
      expect(validateZip('ind', '46202')).toBe(true);
      expect(validateZip('IND', '46201')).toBe(true);
      expect(validateZip('indiana', '46000')).toBe(false);
      expect(validateZip('IND', '48000')).toBe(false);
    });
  });
  describe('IA', () => {
    it('should validate zip code', () => {
      expect(validateZip('iowa', '50101')).toBe(true);
      expect(validateZip('ia', '50102')).toBe(true);
      expect(validateZip('IA', '50101')).toBe(true);
      expect(validateZip('iowa', '50000')).toBe(false);
      expect(validateZip('IA', '52900')).toBe(false);
    });
  });
  describe('KS', () => {
    it('should validate zip code', () => {
      expect(validateZip('kansas', '66201')).toBe(true);
      expect(validateZip('ks', '66202')).toBe(true);
      expect(validateZip('KS', '66201')).toBe(true);
      expect(validateZip('kansas', '66000')).toBe(false);
      expect(validateZip('KS', '68900')).toBe(false);
    });
  });
  describe('KY', () => {
    it('should validate zip code', () => {
      expect(validateZip('kentucky', '40201')).toBe(true);
      expect(validateZip('ky', '40202')).toBe(true);
      expect(validateZip('KY', '40201')).toBe(true);
      expect(validateZip('kentucky', '40000')).toBe(false);
      expect(validateZip('KY', '43100')).toBe(false);
    });
  });
  describe('LA', () => {
    it('should validate zip code', () => {
      expect(validateZip('louisiana', '70101')).toBe(true);
      expect(validateZip('la', '70102')).toBe(true);
      expect(validateZip('LA', '70101')).toBe(true);
      expect(validateZip('louisiana', '70000')).toBe(false);
      expect(validateZip('LA', '72100')).toBe(false);
    });
  });
  describe('ME', () => {
    it('should validate zip code', () => {
      expect(validateZip('maine', '4001')).toBe(true);
      expect(validateZip('me', '4002')).toBe(true);
      expect(validateZip('ME', '4001')).toBe(true);
      expect(validateZip('maine', '1000')).toBe(false);
      expect(validateZip('ME', '6000')).toBe(false);
    });
  });
  describe('MD', () => {
    it('should validate zip code', () => {
      expect(validateZip('maryland', '21201')).toBe(true);
      expect(validateZip('md', '21202')).toBe(true);
      expect(validateZip('MD', '21201')).toBe(true);
      expect(validateZip('maryland', '20000')).toBe(false);
      expect(validateZip('MD', '22000')).toBe(false);
    });
  });
  describe('MA', () => {
    it('should validate zip code', () => {
      expect(validateZip('massachusetts', '1001')).toBe(true);
      expect(validateZip('ma', '1002')).toBe(true);
      expect(validateZip('MA', '1001')).toBe(true);
      expect(validateZip('massachusetts', '900')).toBe(false);
      expect(validateZip('MA', '7000')).toBe(false);
    });
  });
  describe('MI', () => {
    it('should validate zip code', () => {
      expect(validateZip('michigan', '48201')).toBe(true);
      expect(validateZip('mi', '48202')).toBe(true);
      expect(validateZip('MI', '48201')).toBe(true);
      expect(validateZip('michigan', '48000')).toBe(false);
      expect(validateZip('MI', '59000')).toBe(false);
    });
  });
  describe('MN', () => {
    it('should validate zip code', () => {
      expect(validateZip('minnesota', '55001')).toBe(true);
      expect(validateZip('mn', '55002')).toBe(true);
      expect(validateZip('MN', '55001')).toBe(true);
      expect(validateZip('minnesota', '50000')).toBe(false);
      expect(validateZip('MN', '57000')).toBe(false);
    });
  });
  describe('MS', () => {
    it('should validate zip code', () => {
      expect(validateZip('mississippi', '38601')).toBe(true);
      expect(validateZip('ms', '38602')).toBe(true);
      expect(validateZip('MS', '38601')).toBe(true);
      expect(validateZip('mississippi', '38000')).toBe(false);
      expect(validateZip('MS', '42345')).toBe(false);
    });
  });
  describe('MO', () => {
    it('should validate zip code', () => {
      expect(validateZip('missouri', '63001')).toBe(true);
      expect(validateZip('mo', '63002')).toBe(true);
      expect(validateZip('MO', '63001')).toBe(true);
      expect(validateZip('missouri', '62000')).toBe(false);
      expect(validateZip('MO', '66000')).toBe(false);
    });
  });
  describe('MT', () => {
    it('should validate zip code', () => {
      expect(validateZip('mt', '59937')).toBe(true);
      expect(validateZip('MT', '59937')).toBe(true);
      expect(validateZip('montana', '59001')).toBe(true);
      expect(validateZip('MT', '65433')).toBe(false);
      expect(validateZip('montana', '59000')).toBe(false);
    });
  });
  describe('NE', () => {
    it('should validate zip code', () => {
      expect(validateZip('nebraska', '68001')).toBe(true);
      expect(validateZip('ne', '68002')).toBe(true);
      expect(validateZip('NE', '68001')).toBe(true);
      expect(validateZip('nebraska', '68000')).toBe(false);
      expect(validateZip('NE', '70000')).toBe(false);
    });
  });
  describe('NV', () => {
    it('should validate zip code', () => {
      expect(validateZip('nevada', '89001')).toBe(true);
      expect(validateZip('nv', '89002')).toBe(true);
      expect(validateZip('NV', '89001')).toBe(true);
      expect(validateZip('nevada', '88000')).toBe(false);
      expect(validateZip('NV', '90000')).toBe(false);
    });
  });
  describe('NH', () => {
    it('should validate zip code', () => {
      expect(validateZip('new hampshire', '3031')).toBe(true);
      expect(validateZip('nh', '3232')).toBe(true);
      expect(validateZip('NH', '3431')).toBe(true);
      expect(validateZip('new hampshire', '3995')).toBe(false);
      expect(validateZip('NH', '445d')).toBe(false);
    });
  });
  describe('NJ', () => {
    it('should validate zip code', () => {
      expect(validateZip('new jersey', '7001')).toBe(true);
      expect(validateZip('nj', '7002')).toBe(true);
      expect(validateZip('NJ', '7001')).toBe(true);
      expect(validateZip('new jersey', '7000')).toBe(false);
      expect(validateZip('NJ', '9000')).toBe(false);
    });
  });
  describe('NM', () => {
    it('should validate zip code', () => {
      expect(validateZip('new mexico', '87001')).toBe(true);
      expect(validateZip('nm', '87002')).toBe(true);
      expect(validateZip('NM', '87001')).toBe(true);
      expect(validateZip('new mexico', '87000')).toBe(false);
      expect(validateZip('NM', '88563')).toBe(false);
    });
  });
  describe('NY', () => {
    it('should validate zip code', () => {
      expect(validateZip('ny', 14656)).toBe(true);
      expect(validateZip('ny', 501)).toBe(true);
      expect(validateZip('NY', '1002')).toBe(true);
      expect(validateZip('new york', '400')).toBe(false);
      expect(validateZip('NY', '23234')).toBe(false);
    });
  });
  describe('NC', () => {
    it('should validate zip code', () => {
      expect(validateZip('nc', 28001)).toBe(true);
      expect(validateZip('NC', '28002')).toBe(true);
      expect(validateZip('north carolina', '28001')).toBe(true);
      expect(validateZip('NC', '28999')).toBe(false);
      expect(validateZip('north carolina', 26934)).toBe(false);
    });
  });
  describe('ND', () => {
    it('should validate zip code', () => {
      expect(validateZip('nd', '58001')).toBe(true);
      expect(validateZip('ND', '58002')).toBe(true);
      expect(validateZip('north dakota', '58001')).toBe(true);
      expect(validateZip('ND', '58999')).toBe(false);
      expect(validateZip('north dakota', '58000')).toBe(false);
    });
  });
  describe('OH', () => {
    it('should validate zip code', () => {
      expect(validateZip('ohio', '45001')).toBe(true);
      expect(validateZip('oh', '45002')).toBe(true);
      expect(validateZip('OH', '45001')).toBe(true);
      expect(validateZip('ohio', 46778)).toBe(false);
      expect(validateZip('OH', '42577')).toBe(false);
    });
  });
  describe('OK', () => {
    it('should validate zip code', () => {
      expect(validateZip('oklahoma', '73001')).toBe(true);
      expect(validateZip('ok', '73002')).toBe(true);
      expect(validateZip('OK', '73001')).toBe(true);
      expect(validateZip('oklahoma', '73000')).toBe(false);
      expect(validateZip('OK', '75400')).toBe(false);
    });
  });
  describe('OR', () => {
    it('should validate zip code', () => {
      expect(validateZip('oregon', '97901')).toBe(true);
      expect(validateZip('or', '97902')).toBe(true);
      expect(validateZip('OR', '97901')).toBe(true);
      expect(validateZip('oregon', '97000')).toBe(false);
      expect(validateZip('OR', '98000')).toBe(false);
    });
  });
  describe('PA', () => {
    it('should validate zip code', () => {
      expect(validateZip('pennsylvania', '19001')).toBe(true);
      expect(validateZip('pa', '19002')).toBe(true);
      expect(validateZip('PA', '19001')).toBe(true);
      expect(validateZip('pennsylvania', '15000')).toBe(false);
      expect(validateZip('PA', '20000')).toBe(false);
    });
  });
  describe('RI', () => {
    it('should validate zip code', () => {
      expect(validateZip('rhode island', '2801')).toBe(true);
      expect(validateZip('ri', '2802')).toBe(true);
      expect(validateZip('RI', '2801')).toBe(true);
      expect(validateZip('rhode island', '2800')).toBe(false);
      expect(validateZip('RI', '4456')).toBe(false);
    });
  });
  describe('SC', () => {
    it('should validate zip code', () => {
      expect(validateZip('south carolina', '29001')).toBe(true);
      expect(validateZip('sc', '29002')).toBe(true);
      expect(validateZip('SC', '29001')).toBe(true);
      expect(validateZip('south carolina', '29000')).toBe(false);
      expect(validateZip('SC', '29999')).toBe(false);
    });
  });
  describe('SD', () => {
    it('should validate zip code', () => {
      expect(validateZip('south dakota', '57001')).toBe(true);
      expect(validateZip('sd', '57002')).toBe(true);
      expect(validateZip('SD', '57001')).toBe(true);
      expect(validateZip('south dakota', '57000')).toBe(false);
      expect(validateZip('SD', '57999')).toBe(false);
    });
  });
  describe('TN', () => {
    it('should validate zip code', () => {
      expect(validateZip('tennessee', '37010')).toBe(true);
      expect(validateZip('tn', '37555')).toBe(true);
      expect(validateZip('TN', '37056')).toBe(true);
      expect(validateZip('tennessee', '37000')).toBe(false);
      expect(validateZip('TN', '39999')).toBe(false);
    });
  });
  describe('TX', () => {
    it('should validate zip code', () => {
      expect(validateZip('texas', '73301')).toBe(true);
      expect(validateZip('tx', '73302')).toBe(true);
      expect(validateZip('TX', '73301')).toBe(true);
      expect(validateZip('texas', '73000')).toBe(false);
      expect(validateZip('TX', '89999')).toBe(false);
    });
  });
  describe('UT', () => {
    it('should validate zip code', () => {
      expect(validateZip('utah', '84001')).toBe(true);
      expect(validateZip('ut', '84002')).toBe(true);
      expect(validateZip('UT', '84001')).toBe(true);
      expect(validateZip('utah', '84000')).toBe(false);
      expect(validateZip('UT', '89999')).toBe(false);
    });
  });
  describe('VA', () => {
    it('should validate zip code', () => {
      expect(validateZip('virginia', '20101')).toBe(true);
      expect(validateZip('va', '22002')).toBe(true);
      expect(validateZip('VA', '22001')).toBe(true);
      expect(validateZip('virginia', '20000')).toBe(false);
      expect(validateZip('VA', '25984')).toBe(false);
    });
  });
  describe('VT', () => {
    it('should validate zip code', () => {
      expect(validateZip('vermont', '5701')).toBe(true);
      expect(validateZip('vt', '5702')).toBe(true);
      expect(validateZip('VT', '5003')).toBe(true);
      expect(validateZip('vermont', '5000')).toBe(false);
      expect(validateZip('VT', '5999')).toBe(false);
    });
  });
  describe('WA', () => {
    it('should validate zip code', () => {
      expect(validateZip('washington', '98001')).toBe(true);
      expect(validateZip('wa', '98002')).toBe(true);
      expect(validateZip('WA', '98001')).toBe(true);
      expect(validateZip('washington', '98000')).toBe(false);
      expect(validateZip('WA', '99999')).toBe(false);
    });
  });
  describe('WV', () => {
    it('should validate zip code', () => {
      expect(validateZip('west virginia', '25001')).toBe(true);
      expect(validateZip('wv', '25002')).toBe(true);
      expect(validateZip('WV', '25001')).toBe(true);
      expect(validateZip('west virginia', '24000')).toBe(false);
      expect(validateZip('WV', '27889')).toBe(false);
    });
  });
  describe('WI', () => {
    it('should validate zip code', () => {
      expect(validateZip('wisconsin', '53001')).toBe(true);
      expect(validateZip('wi', '53002')).toBe(true);
      expect(validateZip('WI', '53001')).toBe(true);
      expect(validateZip('wisconsin', '53000')).toBe(false);
      expect(validateZip('WI', '59999')).toBe(false);
    });
  });
  describe('WY', () => {
    it('should validate zip code', () => {
      expect(validateZip('wyoming', '82201')).toBe(true);
      expect(validateZip('wy', '82202')).toBe(true);
      expect(validateZip('WY', '82201')).toBe(true);
      expect(validateZip('wyoming', '82000')).toBe(false);
      expect(validateZip('WY', '89999')).toBe(false);
    });
  });
});
