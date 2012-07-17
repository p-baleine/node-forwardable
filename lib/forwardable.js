module.exports = {
  /**
   * By extending this module, delegate method call to prop object
   * @param {String} prop the property which would be delegated method call
   * @param {String*} methods methods which would be delegated to prop
   */
  defDelegator : function() {
    var args = [].slice.call(arguments, 0)
      , propName = args[0]
      , methods = args.slice(1);

    methods.forEach(function(m) {
      this.prototype[m] = function() {
        var prop = this[propName];
        return prop[m].apply(prop, arguments);
      };
    }.bind(this));
  }
};
