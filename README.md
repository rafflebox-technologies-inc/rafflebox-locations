# zip-postal-codes

Library for validating Canadian Postal Codes and US Zip Codes

# usage

`yarn add zip-postal-codes`

```javascript
1. CA
> import { validateCaPostalCodes } from 'zip-postal-codes/src';
<strong> Province </strong>: could be the first 2 letters or the the full name of the province
<strong> Postal Code </strong>: only the first letter 
validateCaPostalCodes(province: string, postalCode: string); 
validateCaPostalCodes('Alberta', 'T'); // true
validateCaPostalCodes('Manitoba', 'R'); // true
validateCaPostalCodes('NB', 'S'); // false
```

```javascript
2. US

> import { validateUsPostalCodes } from 'zip-postal-codes/src';
<strong> State </strong>: could be the first 2 letters or the full name of the state
<strong> Zip Code </strong>: could be 5 digit of the state as string or number
validateUsPostalCodes('colorado', '80201'); // true
validateUsPostalCodes('DE', 19901); // true 
validateUsPostalCodes('LA', '72100'); // false
```
# build

yarn build <br>
yarn install

# test

yarn test
