node-forwardable
================

Ruby's forwardable inspired module which defines delegatable functionality of methods for a class.

## Install
    npm install node-forwardable

## Example

    var util = require('util')
      , log = console.log.bind(console)
      , forwardable = require('node-forwardable');

    var Stack = function() {
      this.content = [];
      this.defDelegator('content', 'push', 'pop');
    };
    util._extend(Stack.prototype, forwardable);
    
    s = new Stack;
    s.push(1);
    s.push(2);
    s.push(3);
    log(s.pop()); // => 3
    log(s.pop()); // => 2
    log(s.pop()); // => 1
    
