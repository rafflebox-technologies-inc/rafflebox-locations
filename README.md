# zip-postal-codes

Library for validating Canadian Postal Codes and US Zip Codes

# usage

`yarn add zip-postal-codes`

```javascript
1. CA
> import { isValidateCaPostalCodes } from 'zip-postal-codes/src';
<strong> Province </strong>: should be the first 2 letters or the the full name of the province
<strong> Postal Code </strong>: only the first letter 
    isValidateCaPostalCodes(province: string, postalCode: string); 
    isValidateCaPostalCodes('Alberta', 'T'); // true
    isValidateCaPostalCodes('Manitoba', 'R'); // true
    isValidateCaPostalCodes('NB', 'S'); // false
```

```javascript
2. US

> import { isValidateUsPostalCodes } from 'zip-postal-codes/src';
<strong> State </strong>: should be the first 2 letters or the full name of the state
<strong> Zip Code </strong>: should be 5 digit of the state as string or number
    isValidateUsPostalCodes('colorado', '80201'); // true
    isValidateUsPostalCodes('DE', 19901); // true 
    isValidateUsPostalCodes('LA', '72100'); // false
```
# build

yarn build <br>
yarn install

# test

yarn test
