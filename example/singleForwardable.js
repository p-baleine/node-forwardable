var util = require('util')
  , singleForwardable = require('../').singleForwardable
  , printer = new String;

util._extend(printer, singleForwardable);
printer.defDelegator(console, 'log');
printer.log('Hello');