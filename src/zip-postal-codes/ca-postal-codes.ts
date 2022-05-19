export type ProvinceCodes = 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NS' | 'NT' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT';

type PostalCodePrefix = {
  [province in ProvinceCodes] : string | string[];
}

const ab = 'T';
const bc = 'V';
const mb = 'R';
const on = ['K', 'L', 'M', 'N', 'P'];
const nl = 'A';
const nb = 'E';
const ns = 'B';
const nt = 'X';
const nu = 'X';
const qc = ['G', 'H', 'J', 'K'];
const sk = 'S';
const yt = 'Y';
const pe = 'C';

const postalCodes: PostalCodePrefix = {
  AB: ab,
  BC: bc,
  MB: mb,
  NB: nb,
  NL: nl,
  NS: ns,
  NT: nt,
  NU: nu,
  ON: on,
  QC: qc,
  SK: sk,
  YT: yt,
  PE: pe,
};

const validatePostal = (province: ProvinceCodes, postal: string): boolean => {
  const prefix = postalCodes[province];

  if (prefix) {
    if (typeof prefix === 'string') {
      return postal.toLowerCase().startsWith(prefix.toLowerCase());
    }

    if (typeof prefix === 'object') {
      let match = false;

      prefix.forEach((p: string) => {
        if (postal.toLowerCase().startsWith(p.toLowerCase())) {
          match = true;
        }
      });

      return match;
    }

    return false;
  }

  return false;
};

export default validatePostal;
