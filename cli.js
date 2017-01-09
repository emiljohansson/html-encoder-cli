#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const encode = require('../html-encoder')
const string = argv._[0]
const result = encode(string)
console.log(result)
