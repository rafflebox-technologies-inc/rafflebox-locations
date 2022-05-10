# zip-postal-codes

Library for validating Canadian Postal Codes and US Zip Codes

# usage

`yarn add zip-postal-codes`

```javascript
1. CA
`import { validatePostal } from 'zip-postal-codes/src';`
<strong> Province </strong>: should be the first 2 letters or the the full name of the province
<strong> Postal Code </strong>: only the first letter 
    validatePostal(province: string, postalCode: string); 
    validatePostal('Alberta', 'T'); // true
    validatePostal('Manitoba', 'R'); // true
    validatePostal('NB', 'S'); // false
```

```javascript
2. US

`import { validateZip } from 'zip-postal-codes/src'`;
<strong> State </strong>: should be the first 2 letters or the full name of the state
<strong> Zip Code </strong>: should be 5 digit of the state as string or number
    validateZip('colorado', '80201'); // true
    validateZip('DE', 19901); // true 
    validateZip('LA', '72100'); // false
```
# build

yarn build <br>
yarn install

# test

yarn test
