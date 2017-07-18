'use strict'

const axios = require('axios')

module.exports = (
  apiUrl,
  card,
  amount = 50,
  { currency = 'usd', description = 'Donation' } = {}
) => {
  return axios(`${apiUrl}/donation`, {
    method: 'POST',
    data: {
      amount,
      currency,
      description,
      card
    }
  })
    .then(donation => donation)
    .catch(err => err)
}
