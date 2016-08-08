goog.provide("ispring.Shapes.Model");

goog.require("goog.array");
goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.Shapes.Model = goog.defineClass(null, {
        constructor:function()
        {
            /**@private {Array}*/
            this._data = [];
        },

        /**
         * @public
         */
        addShape:function(shape)
        {
            goog.array.insert(this._data, shape);
        }
    })
});