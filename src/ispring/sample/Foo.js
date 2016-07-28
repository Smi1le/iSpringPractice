goog.provide("ispring.sample.Foo");

goog.require("ispring.sample.IFoo");
goog.require("ispring.sample.SimpleFoo");

goog.scope(function() {
	var SimpleFoo = ispring.sample.SimpleFoo;

	/**
	 * @constructor
	 * @implements {ispring.sample.IFoo}
	 * @extends {ispring.sample.SimpleFoo}
	 */
	ispring.sample.Foo = goog.defineClass(SimpleFoo, {
		constructor: function() {
		},

		/**
		 * @param {string} p1
		 */
		updateValue: function(p1) {
			this._param = p1;
		}
	});
});

