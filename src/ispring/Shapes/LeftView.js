goog.provide("ispring.Shapes.LeftView");

goog.require("ispring.Shapes.Rectangle");
// goog.require("goog.math");
goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.Shapes.LeftView = goog.defineClass(null, {
        constructor:function(model)
        {
            this._model = model;
        },

        /**
         * @public
         */
        createShape:function(shape)
        {
            var triangle = new ispring.Shapes.Rectangle(new goog.math.Coordinate(200, 200), new goog.math.Size(200, 200), "type");
            this._model.addShape(shape);
        }
    })
});
