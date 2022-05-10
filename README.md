# zip-postal-codes

Library for validating Canadian Postal Codes and US Zip Codes

## Usage

`yarn add zip-postal-codes`

1. Validate Canadian Postal Code

   `import { validatePostal } from 'zip-postal-codes';`

   Province : should be the first 2 letters or the the full name of the province
   Postal Code: only the first letter

   `validatePostal(province: string, postalCode: string);`
   `validatePostal('Alberta', 'T'); // true`
   `validatePostal('Manitoba', 'R'); // true`
   `validatePostal('NB', 'S'); // false`

2. Validate US Zip Code

   `import { validateZip } from 'zip-postal-codes'`;

   State: should be the first 2 letters or the full name of the state
   Zip Code : should be 5 digit of the state as string or number
   
   `validateZip('colorado', '80201'); // true`
   `validateZip('DE', 19901); // true `
   `validateZip('LA', '72100'); // false`

# build

yarn build

yarn install

# test

yarn test
