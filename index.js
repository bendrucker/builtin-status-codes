'use strict'

// IANA temporary registration, expires 2026-11-13:
// https://www.iana.org/assignments/http-status-codes
module.exports = Object.assign({
  104: 'Upload Resumption Supported'
}, require('http').STATUS_CODES)
