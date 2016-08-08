goog.provide("ispring.Shapes.Rectangle");

goog.require("ispring.Shapes.Shape");

goog.scope(function()
{
    var shape = ispring.Shapes.Shape;
    /**
     * @constructor
     */
    ispring.Shapes.Rectangle = goog.defineClass(shape, {
        constructor:function(position, size, type)
        {
           goog.base(this, position, size, type);
        }
    })
});