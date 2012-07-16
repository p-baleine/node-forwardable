var should = require('should')
  , util = require('util')
  , forwardable = require('../');

describe(forwardable, function() {
  var Stack, s;

  before(function(done) {
    Stack = function() {
      this.content = [];
      this.defDelegator('content', 'push', 'pop');
    };
    util._extend(Stack.prototype, forwardable);
    s = new Stack;
    done();
  });

  it('should respond to `push` method', function() {
    s.push(1);
    s.content.should.include(1);
    s.push(2);
    s.content.should.include(2);
    s.push(3);
    s.content.should.include(3);
  });

  it('should respond to `pop` method', function() {
    s.pop().should.equal(3);
    s.pop().should.equal(2);
    s.pop().should.equal(1);
  });
});