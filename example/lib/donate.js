'use strict'

const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')
const shoutMessage = require('shout-message')
const npmDonate = require('npm-donate')
const chalk = require('chalk')

require('dotenv').config()

// 50 cents is the minimum value possible with Stripe
module.exports = (amount = 0.5) => {
  shoutMessage(
    `Support us with a donation and help us continue our activities.\n${chalk.gray(
      '>'
    )} Or support us on Open Collective: https://opencollective.com/project \n`
  )
  return npmDonate(process.env.STRIPE, amount)
    .then(result => shoutSuccess(`Thanks for donating $${amount}! ❤️`))
    .catch(err => shoutError(err.message))
}
