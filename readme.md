# npm-donate [![Build Status](https://travis-ci.org/bukinoshita/npm-donate.svg?branch=master)](https://travis-ci.org/bukinoshita/npm-donate)

> Support maintainers with a donation and help them continue with activities

<br/>

**WARNING!** Do not use in production (unless you don't care about your API Key).

## Install
```bash
$ npm install --save npm-donate
```


## Usage
```js
const npmDonate = require('npm-donate')

const stripeApiKey = 'pk_test_Qxaxb186qemUZHpAJaMuNJrh'

npmDonate(stripeApiKey, 100)
//=> It returns an object. Check Stripe API: https://stripe.com/docs/api#charge_objec
```


## Demo

<img src="https://github.com/bukinoshita/credit-card-prompt/blob/master/demo.gif" width="550">

_Check example [here](https://github.com/bukinoshita/npm-donate/tree/master/example)._


## API

### npmDonate(stripeApiKey, amount, googleMapsKey)

Returns a `promise`

#### stripeApiKey

Type: `string`<br/>
Required

Stripe API Key: [Check their API](https://stripe.com/docs/api#authentication)

#### amount

Type: `number`<br/>
Default: `0.50` (cents — minimum)<br/>
Optional

Donation amount

#### googleMapsKey

Type: `string`<br/>
Optional

If Google Maps API Key is set, it will lookup for user `state` and `city` using zip code.


## Related

- [credit-card-prompt](https://github.com/bukinoshita/credit-card-prompt) — Credit card prompt with validation and address lookup


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
