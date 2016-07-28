goog.provide("ispring.sample.IFoo");

/**
 * @interface
 */
ispring.sample.IFoo = function() {};
ispring.sample.IFoo.prototype = {
	/**
	 * @param {string} p1
	 */
	updateValue: goog.abstractMethod
};
