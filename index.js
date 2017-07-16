'use strict'

const creditCardPrompt = require('credit-card-prompt')
const ora = require('ora')

const donate = require('./lib/donate')

module.exports = (stripeApiKey, amount, googleMapsKey) => {
  return creditCardPrompt(googleMapsKey).then(res => {
    const spinner = ora('Donating...')
    const expDateParts = res.expDate.split(' / ')
    const card = {
      name: res.name,
      number: res.cardNumber,
      cvc: res.ccv,
      address_country: res.country,
      address_zip: res.zipCode,
      address_state: res.state,
      address_city: res.city,
      address_line1: res.address1,
      exp_month: expDateParts[0],
      exp_year: expDateParts[1]
    }
    spinner.start()
    return donate(stripeApiKey, card, (amount = amount * 100)).then(res => {
      spinner.stop()
      return res
    })
  })
}
