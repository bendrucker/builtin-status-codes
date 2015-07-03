'use strict'

var test = require('tape')
var node = require('./')
var browser = require('./browser')

test(function (t) {
  t.equal(node[100], 'Continue')
  t.equal(node[100], browser[100])
  t.end()
})
