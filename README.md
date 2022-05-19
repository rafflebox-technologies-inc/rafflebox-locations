# rafflebox-locations

Library for validating Canadian Postal Codes and US Zip Codes

## Usage

`yarn add rafflebox-locations`

1. Validate Canadian Postal Code

   ```import { validatePostal } from 'zip-postal-codes';

   validatePostal('AB', 'T3E 1V3'); // true
   validatePostal('MB', 'R2R 1V4'); // true
   validatePostal('NB', 'S3E 1V6'); // false

   ```

2. Validate US Zip Code

   ```import { validateZip } from 'zip-postal-codes';

   validateZip('CO', '80201'); // true
   validateZip('DE', 19901); // true
   validateZip('LA', '72100'); // false
   ```

# build

yarn build

yarn install

# test

yarn test
