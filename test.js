'use strict'

const test = require('tape')
const builtin = require('http').STATUS_CODES
const node = require('./')
const browser = require('./browser')

test(function (t) {
  t.equal(node[100], 'Continue')
  t.equal(node[100], browser[100])
  t.end()
})

test('upload resumption is available in browsers', function (t) {
  t.equal(browser[104], 'Upload Resumption Supported')
  t.end()
})

test('exports the native status code map in Node', function (t) {
  t.equal(node, builtin)
  t.end()
})
