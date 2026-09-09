'use strict'

const test = require('tape')
const builtin = require('http').STATUS_CODES
const original = Object.assign({}, builtin)
const node = require('./')
const browser = require('./browser')

test(function (t) {
  t.equal(node[100], 'Continue')
  t.equal(node[100], browser[100])
  t.end()
})

test('upload resumption is available in Node and browsers', function (t) {
  t.equal(node[104], 'Upload Resumption Supported')
  t.equal(browser[104], 'Upload Resumption Supported')
  t.end()
})

test('preserves native status codes without modifying the builtin map', function (t) {
  t.notEqual(node, builtin)
  t.deepEqual(builtin, original)
  Object.keys(builtin).forEach(function (code) {
    t.equal(node[code], builtin[code], code)
  })
  t.end()
})
