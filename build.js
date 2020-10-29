'use strict'

const fs = require('fs')
const statusCodes = require('./')

const code = 'module.exports = ' + JSON.stringify(statusCodes, null, 2) + '\n'

fs.writeFileSync('browser.js', code)
