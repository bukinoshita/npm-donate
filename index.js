'use strict'

const creditCardPrompt = require('credit-card-prompt')
const ora = require('ora')

const donate = require('./lib/donate')

module.exports = (
  apiUrl,
  amount,
  { googleMapsKey, currency, description } = {}
) => {
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
      exp_month: expDateParts[0],
      exp_year: expDateParts[1],
      object: 'card'
    }
    spinner.start()
    return donate(
      apiUrl,
      card,
      (amount = amount * 100),
      ({ currency = currency, description = description } = {})
    )
      .then(res => {
        spinner.stop()
        return res.data
      })
      .catch(err => {
        spinner.stop()
        return err
      })
  })
}
