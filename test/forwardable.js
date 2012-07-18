var should = require('should')
  , util = require('util')
  , forwardable = require('../').forwardable;

describe("forwardable", function() {
  var Queue, q;

  before(function(done) {
    Queue = function() {
      this.q = [];
    };
    util._extend(Queue, forwardable);

    // setup preferred interface, enq() and deq()...
    Queue.defDelegator('q', 'push', 'enq');
    Queue.defDelegator('q', 'shift', 'deq');
    // support some general Array methods that fit Queues well
    Queue.defDelegators('q', 'push', 'shift');

    q = new Queue;
    done();
  });

  it('should respond with alias method', function() {
    q.enq(1, 2, 3, 4, 5);
    q.deq().should.equal(1);
    q.deq().should.equal(2);
    q.deq().should.equal(3);
    q.deq().should.equal(4);
    q.deq().should.equal(5);
  });

  it('should respond with methods', function() {
    q.push(6);
    q.shift().should.equal(6);
  });
});