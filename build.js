'use strict'

const fs = require('fs')
// IANA temporary registration, expires 2026-11-13:
// https://www.iana.org/assignments/http-status-codes
const statusCodes = Object.assign({
  104: 'Upload Resumption Supported'
}, require('./'))

const code = 'module.exports = ' + JSON.stringify(statusCodes, null, 2) + '\n'

fs.writeFileSync('browser.js', code)
