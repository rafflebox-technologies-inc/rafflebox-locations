export type Country = 'US' | 'CA';

export type CountryMap = {
  [country in Country]: string | string[];
};

const countryMap: CountryMap = {
  'CA': 'Canada',
  'US': 'United States',
}

export default countryMap;
