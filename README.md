node-forwardable
================

Ruby's forwardable inspired modele which defines delegatable functionality of methods for a class.

## Example

    var util = require('util')
      , forwardable = require('forwardable');
      
    Stack = function() {
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
