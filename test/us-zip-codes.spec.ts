import validate from '../src/us-zip-codes';

describe('USA postal code', () => {
  describe('AL', () => {
    it('should validate zip code', () => {
      expect(validate('al', 35004)).toBe(true);
      expect(validate('AL', '35005')).toBe(true);
      expect(validate('al', '35005')).toBe(true);
      expect(validate('AL', '35004')).toBe(true);
      expect(validate('alabama', '35003')).toBe(false);
      expect(validate('AL', '36926')).toBe(false);
    });
  });
  describe('AK', () => {
    it('should validate zip code', () => {
      expect(validate('alaska', '99504')).toBe(true);
      expect(validate('ak', '99505')).toBe(true);
      expect(validate('AK', '99504')).toBe(true);
      expect(validate('alaska', '99960')).toBe(false);
      expect(validate('AK', '99950')).toBe(true);
      expect(validate('AK', '99951')).toBe(false);
    });
  });
  describe('AZ', () => {
    it('should validate zip code', () => {
      expect(validate('arizona', '85201')).toBe(true);
      expect(validate('az', '85202')).toBe(true);
      expect(validate('AZ', '85201')).toBe(true);
      expect(validate('arizona', '86557')).toBe(false);
      expect(validate('AZ', '85000')).toBe(false);
    });
  });
  describe('AR', () => {
    it('should validate zip code', () => {
      expect(validate('arkansas', '72401')).toBe(true);
      expect(validate('ar', '72402')).toBe(true);
      expect(validate('AR', '72401')).toBe(true);
      expect(validate('arkansas', '71400')).toBe(false);
      expect(validate('AR', '73400')).toBe(false);
    });
  });
  describe('CA', () => {
    it('should validate zip code', () => {
      expect(validate('california', '90002')).toBe(true);
      expect(validate('ca', '90003')).toBe(true);
      expect(validate('CA', '90002')).toBe(true);
      expect(validate('california', '90000')).toBe(false);
      expect(validate('CA', '96240')).toBe(false);
    });
  });
  describe('CO', () => {
    it('should validate zip code', () => {
      expect(validate('colorado', '80201')).toBe(true);
      expect(validate('co', '80202')).toBe(true);
      expect(validate('CO', '80201')).toBe(true);
      expect(validate('colorado', '82200')).toBe(false);
      expect(validate('CO', '80000')).toBe(false);
    });
  });
  describe('CT', () => {
    it('should validate zip code', () => {
      expect(validate('connecticut', '6001')).toBe(true);
      expect(validate('ct', '6002')).toBe(true);
      expect(validate('CT', '6001')).toBe(true);
      expect(validate('connecticut', '6000')).toBe(false);
      expect(validate('CT', '6937')).toBe(false);
    });
  });
  describe('DE', () => {
    it('should validate zip code', () => {
      expect(validate('delaware', '19901')).toBe(true);
      expect(validate('de', '19902')).toBe(true);
      expect(validate('DE', '19901')).toBe(true);
      expect(validate('delaware', '19700')).toBe(false);
      expect(validate('DE', '19990')).toBe(false);
    });
  });
  describe('FL', () => {
    it('should validate zip code', () => {
      expect(validate('florida', '33001')).toBe(true);
      expect(validate('fl', '33002')).toBe(true);
      expect(validate('FL', '33001')).toBe(true);
      expect(validate('florida', '32000')).toBe(false);
      expect(validate('FL', '35000')).toBe(false);
    });
  });
  describe('GA', () => {
    it('should validate zip code', () => {
      expect(validate('ga', '33001')).toBe(true);
      expect(validate('ga', '30302')).toBe(true);
      expect(validate('GA', '30301')).toBe(true);
      expect(validate('georgia', '30000')).toBe(false);
      expect(validate('GA', '40000')).toBe(false);
    });
  });
  describe('HI', () => {
    it('should validate zip code', () => {
      expect(validate('hawaii', '96800')).toBe(true);
      expect(validate('hi', '96702')).toBe(true);
      expect(validate('HI', '96701')).toBe(true);
      expect(validate('hawaii', '96000')).toBe(false);
      expect(validate('HI', '97700')).toBe(false);
    });
  });
  describe('ID', () => {
    it('should validate zip code', () => {
      expect(validate('idaho', '83401')).toBe(true);
      expect(validate('id', '83402')).toBe(true);
      expect(validate('ID', '83401')).toBe(true);
      expect(validate('idaho', '83000')).toBe(false);
      expect(validate('ID', '84000')).toBe(false);
    });
  });
  describe('IL', () => {
    it('should validate zip code', () => {
      expect(validate('illinois', '62401')).toBe(true);
      expect(validate('il', '62402')).toBe(true);
      expect(validate('IL', '62401')).toBe(true);
      expect(validate('illinois', '60000')).toBe(false);
      expect(validate('IL', '63000')).toBe(false);
    });
  });
  describe('IN', () => {
    it('should validate zip code', () => {
      expect(validate('indiana', '46201')).toBe(true);
      expect(validate('ind', '46202')).toBe(true);
      expect(validate('IND', '46201')).toBe(true);
      expect(validate('indiana', '46000')).toBe(false);
      expect(validate('IND', '48000')).toBe(false);
    });
  });
  describe('IA', () => {
    it('should validate zip code', () => {
      expect(validate('iowa', '50101')).toBe(true);
      expect(validate('ia', '50102')).toBe(true);
      expect(validate('IA', '50101')).toBe(true);
      expect(validate('iowa', '50000')).toBe(false);
      expect(validate('IA', '52900')).toBe(false);
    });
  });
  describe('KS', () => {
    it('should validate zip code', () => {
      expect(validate('kansas', '66201')).toBe(true);
      expect(validate('ks', '66202')).toBe(true);
      expect(validate('KS', '66201')).toBe(true);
      expect(validate('kansas', '66000')).toBe(false);
      expect(validate('KS', '68900')).toBe(false);
    });
  });
  describe('KY', () => {
    it('should validate zip code', () => {
      expect(validate('kentucky', '40201')).toBe(true);
      expect(validate('ky', '40202')).toBe(true);
      expect(validate('KY', '40201')).toBe(true);
      expect(validate('kentucky', '40000')).toBe(false);
      expect(validate('KY', '43100')).toBe(false);
    });
  });
  describe('LA', () => {
    it('should validate zip code', () => {
      expect(validate('louisiana', '70101')).toBe(true);
      expect(validate('la', '70102')).toBe(true);
      expect(validate('LA', '70101')).toBe(true);
      expect(validate('louisiana', '70000')).toBe(false);
      expect(validate('LA', '72100')).toBe(false);
    });
  });
  describe('ME', () => {
    it('should validate zip code', () => {
      expect(validate('maine', '4001')).toBe(true);
      expect(validate('me', '4002')).toBe(true);
      expect(validate('ME', '4001')).toBe(true);
      expect(validate('maine', '1000')).toBe(false);
      expect(validate('ME', '6000')).toBe(false);
    });
  });
  describe('MD', () => {
    it('should validate zip code', () => {
      expect(validate('maryland', '21201')).toBe(true);
      expect(validate('md', '21202')).toBe(true);
      expect(validate('MD', '21201')).toBe(true);
      expect(validate('maryland', '20000')).toBe(false);
      expect(validate('MD', '22000')).toBe(false);
    });
  });
  describe('MA', () => {
    it('should validate zip code', () => {
      expect(validate('massachusetts', '1001')).toBe(true);
      expect(validate('ma', '1002')).toBe(true);
      expect(validate('MA', '1001')).toBe(true);
      expect(validate('massachusetts', '900')).toBe(false);
      expect(validate('MA', '7000')).toBe(false);
    });
  });
  describe('MI', () => {
    it('should validate zip code', () => {
      expect(validate('michigan', '48201')).toBe(true);
      expect(validate('mi', '48202')).toBe(true);
      expect(validate('MI', '48201')).toBe(true);
      expect(validate('michigan', '48000')).toBe(false);
      expect(validate('MI', '59000')).toBe(false);
    });
  });
  describe('MN', () => {
    it('should validate zip code', () => {
      expect(validate('minnesota', '55001')).toBe(true);
      expect(validate('mn', '55002')).toBe(true);
      expect(validate('MN', '55001')).toBe(true);
      expect(validate('minnesota', '50000')).toBe(false);
      expect(validate('MN', '57000')).toBe(false);
    });
  });
  describe('MS', () => {
    it('should validate zip code', () => {
      expect(validate('mississippi', '38601')).toBe(true);
      expect(validate('ms', '38602')).toBe(true);
      expect(validate('MS', '38601')).toBe(true);
      expect(validate('mississippi', '38000')).toBe(false);
      expect(validate('MS', '42345')).toBe(false);
    });
  });
  describe('MO', () => {
    it('should validate zip code', () => {
      expect(validate('missouri', '63001')).toBe(true);
      expect(validate('mo', '63002')).toBe(true);
      expect(validate('MO', '63001')).toBe(true);
      expect(validate('missouri', '62000')).toBe(false);
      expect(validate('MO', '66000')).toBe(false);
    });
  });
  describe('MT', () => {
    it('should validate zip code', () => {
      expect(validate('mt', '59937')).toBe(true);
      expect(validate('MT', '59937')).toBe(true);
      expect(validate('montana', '59001')).toBe(true);
      expect(validate('MT', '65433')).toBe(false);
      expect(validate('montana', '59000')).toBe(false);
    });
  });
  describe('NE', () => {
    it('should validate zip code', () => {
      expect(validate('nebraska', '68001')).toBe(true);
      expect(validate('ne', '68002')).toBe(true);
      expect(validate('NE', '68001')).toBe(true);
      expect(validate('nebraska', '68000')).toBe(false);
      expect(validate('NE', '70000')).toBe(false);
    });
  });
  describe('NV', () => {
    it('should validate zip code', () => {
      expect(validate('nevada', '89001')).toBe(true);
      expect(validate('nv', '89002')).toBe(true);
      expect(validate('NV', '89001')).toBe(true);
      expect(validate('nevada', '88000')).toBe(false);
      expect(validate('NV', '90000')).toBe(false);
    });
  });
  describe('NH', () => {
    it('should validate zip code', () => {
      expect(validate('new hampshire', '3031')).toBe(true);
      expect(validate('nh', '3232')).toBe(true);
      expect(validate('NH', '3431')).toBe(true);
      expect(validate('new hampshire', '3995')).toBe(false);
      expect(validate('NH', '445d')).toBe(false);
    });
  });
  describe('NJ', () => {
    it('should validate zip code', () => {
      expect(validate('new jersey', '7001')).toBe(true);
      expect(validate('nj', '7002')).toBe(true);
      expect(validate('NJ', '7001')).toBe(true);
      expect(validate('new jersey', '7000')).toBe(false);
      expect(validate('NJ', '9000')).toBe(false);
    });
  });
  describe('NM', () => {
    it('should validate zip code', () => {
      expect(validate('new mexico', '87001')).toBe(true);
      expect(validate('nm', '87002')).toBe(true);
      expect(validate('NM', '87001')).toBe(true);
      expect(validate('new mexico', '87000')).toBe(false);
      expect(validate('NM', '88563')).toBe(false);
    });
  });
  describe('NY', () => {
    it('should validate zip code', () => {
      expect(validate('ny', 14656)).toBe(true);
      expect(validate('ny', 501)).toBe(true);
      expect(validate('NY', '1002')).toBe(true);
      expect(validate('new york', '400')).toBe(false);
      expect(validate('NY', '23234')).toBe(false);
    });
  });
  describe('NC', () => {
    it('should validate zip code', () => {
      expect(validate('nc', 28001)).toBe(true);
      expect(validate('NC', '28002')).toBe(true);
      expect(validate('north carolina', '28001')).toBe(true);
      expect(validate('NC', '28999')).toBe(false);
      expect(validate('north carolina', 26934)).toBe(false);
    });
  });
  describe('ND', () => {
    it('should validate zip code', () => {
      expect(validate('nd', '58001')).toBe(true);
      expect(validate('ND', '58002')).toBe(true);
      expect(validate('north dakota', '58001')).toBe(true);
      expect(validate('ND', '58999')).toBe(false);
      expect(validate('north dakota', '58000')).toBe(false);
    });
  });
  describe('OH', () => {
    it('should validate zip code', () => {
      expect(validate('ohio', '45001')).toBe(true);
      expect(validate('oh', '45002')).toBe(true);
      expect(validate('OH', '45001')).toBe(true);
      expect(validate('ohio', 46778)).toBe(false);
      expect(validate('OH', '42577')).toBe(false);
    });
  });
  describe('OK', () => {
    it('should validate zip code', () => {
      expect(validate('oklahoma', '73001')).toBe(true);
      expect(validate('ok', '73002')).toBe(true);
      expect(validate('OK', '73001')).toBe(true);
      expect(validate('oklahoma', '73000')).toBe(false);
      expect(validate('OK', '75400')).toBe(false);
    });
  });
  describe('OR', () => {
    it('should validate zip code', () => {
      expect(validate('oregon', '97901')).toBe(true);
      expect(validate('or', '97902')).toBe(true);
      expect(validate('OR', '97901')).toBe(true);
      expect(validate('oregon', '97000')).toBe(false);
      expect(validate('OR', '98000')).toBe(false);
    });
  });
  describe('PA', () => {
    it('should validate zip code', () => {
      expect(validate('pennsylvania', '19001')).toBe(true);
      expect(validate('pa', '19002')).toBe(true);
      expect(validate('PA', '19001')).toBe(true);
      expect(validate('pennsylvania', '15000')).toBe(false);
      expect(validate('PA', '20000')).toBe(false);
    });
  });
  describe('RI', () => {
    it('should validate zip code', () => {
      expect(validate('rhode island', '2801')).toBe(true);
      expect(validate('ri', '2802')).toBe(true);
      expect(validate('RI', '2801')).toBe(true);
      expect(validate('rhode island', '2800')).toBe(false);
      expect(validate('RI', '4456')).toBe(false);
    });
  });
  describe('SC', () => {
    it('should validate zip code', () => {
      expect(validate('south carolina', '29001')).toBe(true);
      expect(validate('sc', '29002')).toBe(true);
      expect(validate('SC', '29001')).toBe(true);
      expect(validate('south carolina', '29000')).toBe(false);
      expect(validate('SC', '29999')).toBe(false);
    });
  });
  describe('SD', () => {
    it('should validate zip code', () => {
      expect(validate('south dakota', '57001')).toBe(true);
      expect(validate('sd', '57002')).toBe(true);
      expect(validate('SD', '57001')).toBe(true);
      expect(validate('south dakota', '57000')).toBe(false);
      expect(validate('SD', '57999')).toBe(false);
    });
  });
  describe('TN', () => {
    it('should validate zip code', () => {
      expect(validate('tennessee', '37010')).toBe(true);
      expect(validate('tn', '37555')).toBe(true);
      expect(validate('TN', '37056')).toBe(true);
      expect(validate('tennessee', '37000')).toBe(false);
      expect(validate('TN', '39999')).toBe(false);
    });
  });
  describe('TX', () => {
    it('should validate zip code', () => {
      expect(validate('texas', '73301')).toBe(true);
      expect(validate('tx', '73302')).toBe(true);
      expect(validate('TX', '73301')).toBe(true);
      expect(validate('texas', '73000')).toBe(false);
      expect(validate('TX', '89999')).toBe(false);
    });
  });
  describe('UT', () => {
    it('should validate zip code', () => {
      expect(validate('utah', '84001')).toBe(true);
      expect(validate('ut', '84002')).toBe(true);
      expect(validate('UT', '84001')).toBe(true);
      expect(validate('utah', '84000')).toBe(false);
      expect(validate('UT', '89999')).toBe(false);
    });
  });
  describe('VA', () => {
    it('should validate zip code', () => {
      expect(validate('virginia', '20101')).toBe(true);
      expect(validate('va', '22002')).toBe(true);
      expect(validate('VA', '22001')).toBe(true);
      expect(validate('virginia', '20000')).toBe(false);
      expect(validate('VA', '25984')).toBe(false);
    });
  });
  describe('VT', () => {
    it('should validate zip code', () => {
      expect(validate('vermont', '5701')).toBe(true);
      expect(validate('vt', '5702')).toBe(true);
      expect(validate('VT', '5003')).toBe(true);
      expect(validate('vermont', '5000')).toBe(false);
      expect(validate('VT', '5999')).toBe(false);
    });
  });
  describe('WA', () => {
    it('should validate zip code', () => {
      expect(validate('washington', '98001')).toBe(true);
      expect(validate('wa', '98002')).toBe(true);
      expect(validate('WA', '98001')).toBe(true);
      expect(validate('washington', '98000')).toBe(false);
      expect(validate('WA', '99999')).toBe(false);
    });
  });
  describe('WV', () => {
    it('should validate zip code', () => {
      expect(validate('west virginia', '25001')).toBe(true);
      expect(validate('wv', '25002')).toBe(true);
      expect(validate('WV', '25001')).toBe(true);
      expect(validate('west virginia', '24000')).toBe(false);
      expect(validate('WV', '27889')).toBe(false);
    });
  });
  describe('WI', () => {
    it('should validate zip code', () => {
      expect(validate('wisconsin', '53001')).toBe(true);
      expect(validate('wi', '53002')).toBe(true);
      expect(validate('WI', '53001')).toBe(true);
      expect(validate('wisconsin', '53000')).toBe(false);
      expect(validate('WI', '59999')).toBe(false);
    });
  });
  describe('WY', () => {
    it('should validate zip code', () => {
      expect(validate('wyoming', '82201')).toBe(true);
      expect(validate('wy', '82202')).toBe(true);
      expect(validate('WY', '82201')).toBe(true);
      expect(validate('wyoming', '82000')).toBe(false);
      expect(validate('WY', '89999')).toBe(false);
    });
  });
});
