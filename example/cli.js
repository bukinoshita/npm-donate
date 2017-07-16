#!/usr/bin/env node
'use strict'

const meow = require('meow')

const donate = require('./lib/donate')

const cli = meow(
  `
  Usage:
    $ cli donate <amount>     Donate to project

  Example:
    $ franz donate 5

  Options:
    -h, --help                Show help options
    -v, --version             Show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

const run = () => {
  const amount = cli.input[0] || undefined

  return donate(amount)
}

run()
