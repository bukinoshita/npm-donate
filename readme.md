# npm-donate [![Build Status](https://travis-ci.org/bukinoshita/npm-donate.svg?branch=master)](https://travis-ci.org/bukinoshita/npm-donate)

> Support maintainers with a donation and help them continue with activities


## Install
```bash
$ npm install --save npm-donate
```


## Usage
```js
const npmDonate = require('npm-donate')

npmDonate('https://npm-donate.now.sh', 100)
```


## Demo

<img src="https://github.com/bukinoshita/credit-card-prompt/blob/master/demo.gif" width="550">


## API

### npmDonate(apiUrl, amount, [options])

Returns a `promise`

#### apiUrl

Type: `string`<br/>
Required

Your API Url where it handles donations.<br/>
Check here: [npm-donate-server](https://github.com/bukinoshita/npm-donate-server)

#### amount

Type: `number`<br/>
Default: `0.50` (cents — minimum)<br/>
Optional

Donation amount

#### options

Type: `object`

##### Google Maps Ket

Type: `string`<br/>

If Google Maps API Key is set, it will lookup for user `state` and `city` using zip code.

##### currency

Type: `string`<br/>
Default: `usd`

3-letter ISO code for currency.<br/>
Check supported currencies [here](https://stripe.com/docs/currencies)

##### description

Type: `string`<br/>
Default: `Donation`

An arbitrary string which you can attach to a Charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.


## Related

- [npm-donate-server](https://github.com/bukinoshita/npm-donate-server)
- [credit-card-prompt](https://github.com/bukinoshita/credit-card-prompt) — Credit card prompt with validation and address lookup


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
