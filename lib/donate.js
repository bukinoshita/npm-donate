'use strict'

const stripe = require('stripe')

module.exports = (
  apiKey,
  card,
  amount = 50,
  { currency = 'usd', description = 'Donation' } = {}
) => {
  return stripe(apiKey).charges.create({
    amount,
    currency,
    card,
    description
  })
}
