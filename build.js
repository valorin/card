'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('              Stephen Rees-Carter'),
  handle: chalk.white('valorin'),
  work: chalk.white('Senior Developer & Security Analyst')
    + chalk.gray(' at ')
    + chalk.red('Defiant')
    + chalk.gray(' / ')
    + chalk.blue('Wordfence'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('valorin'),
  github: chalk.gray('https://github.com/') + chalk.green('valorin'),
  keybase: chalk.gray('https://keybase.io/') + chalk.yellow('valorin'),
  web: chalk.magenta('https://stephenreescarter.net'),
  npx: chalk.red('npx') + ' ' + chalk.white('valorin'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelKeybase: chalk.white.bold('    Keybase:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const keybaseing = `${data.labelKeybase}  ${data.keybase}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  newline +
  twittering + newline + // data.labelTwitter + data.twitter
  githubing + newline + // data.labelGitHub + data.github
  keybaseing + newline + // data.labelKeybase + data.keybase
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
