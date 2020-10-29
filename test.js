'use strict'

const test = require('tape')
const node = require('./')
const browser = require('./browser')

test(function (t) {
  t.equal(node[100], 'Continue')
  t.equal(node[100], browser[100])
  t.end()
})
