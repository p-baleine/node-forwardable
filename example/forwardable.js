var util = require('util')
  , forwardable = require('../').forwardable
  , log = console.log.bind(console);

var Queue = function() {
  this.q = []; // prepare delegate object
};

util._extend(Queue, forwardable);

// setup preferred interface, enq() and deq()...
Queue.defDelegator('q', 'push', 'enq');
Queue.defDelegator('q', 'shift', 'deq');

// support some general Array methods that fit Queues well
Queue.defDelegators('q', 'push', 'shift');

var q = new Queue;
q.enq(1, 2, 3, 4, 5);
q.push(6);

log(q.shift()); //=> 1
while (q.q.length > 0) {
  log(q.deq());  //=> 2, 3, 4, 5, 6
}