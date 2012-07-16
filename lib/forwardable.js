/**
 * By extending this module, delegate method call to prop object
 * @param {String} prop the property which would be delegated method call
 * @param {String*} methods methods which would be delegated to prop
 */
module.exports = {
  defDelegator : function() {
    var args = [].slice.call(arguments, 0)
      , prop = this[args[0]]
      , methods = args.slice(1);

    methods.forEach(function(m) {
      if (!prop[m]) throw new Error(prop + ' dose not have ' + m);

      this.__proto__[m] = function() {
        return prop[m].apply(prop, arguments);
      };
    }.bind(this));
  }
};
