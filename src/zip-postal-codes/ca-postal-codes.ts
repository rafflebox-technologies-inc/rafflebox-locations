export type ProvinceCode = 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NS' | 'NT' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT';

type PostalCodePrefix = {
  [province in ProvinceCode]: string | string[];
};

const ab = 'T';
const bc = 'V';
const mb = 'R';
const on = ['K', 'L', 'M', 'N', 'P'];
const nl = 'A';
const nb = 'E';
const ns = 'B';
const nt = ['X0E, X0G, X1A'];
const nu = ['X0A, X0B, X0C'];
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

function isProvinceCode<T>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj;
}

const validatePostal = (province: string, postal: string): boolean => {
  if (!isProvinceCode(province, postalCodes)) {
    return false;
  }

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
