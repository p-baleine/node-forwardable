var forwardable = exports.forwardable = {

  /**
   * Define `method` as an instance method of delegator.
   * Define method with alias name if `alias` is specified.
   *
   * @param {String} accessor accessor
   * @param {String} method instance method
   * @param {String} alias alias name of delegated method
   * @return {Object} this
   */

  defDelegator: function(accessor, method, alias) {
    alias = alias || method;

    this.prototype[alias] = function() {
      var a = this[accessor];
      return a[method].apply(a, arguments);
    };

    return this;
  },

  /**
   * Define multi methods of accessor as instance methods of delegator
   *
   * @param {String} accessor accessor
   * @param {String} methods instance methods
   * @return {Object} this
   */

  defDelegators: function() {
    var args = [].slice.call(arguments, 0)
      , accessor = args[0]
      , methods = args.slice(1);

    methods.forEach(function(method) {
      forwardable.defDelegator.call(this, accessor, method);
    }.bind(this));

    return this;
  }
};

exports.singleForwardable = {
  defDelegator: function(accessor, method, alias) {
    alias = alias || method;

    this[alias] = function() {
      return accessor[method].apply(accessor, arguments);
    };
  }
};