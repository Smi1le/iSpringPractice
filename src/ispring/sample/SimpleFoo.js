goog.provide("ispring.sample.SimpleFoo");

goog.scope(function() {

	/** @constructor */
	ispring.sample.SimpleFoo = goog.defineClass(null, {
		constructor: function() {
			/** @protected {string} */
			this._param = "123";
		},


		showValue: function() {
			alert(ispring.sample.SimpleFoo.STATIC_VAR + this._param);
		},

		statics: {
			/**
			 * @type {string}
			 */
			STATIC_VAR: "Param: "
		}
	});
});
