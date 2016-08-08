goog.provide("ispring.Shapes.Shape");

goog.require("goog.math");
goog.require("goog.style");
goog.require("goog.dom");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.Shapes.Shape = goog.defineClass(null, {
        constructor:function(position, size, type)
        {
            /**@private {goog.math.Coordinate}*/
            this._position = position;

            /**@private {goog.math.Size}*/
            this._size = size;

            /**@private {string}*/
            this._type = type;

            /**@type {!Element}*/
            this._body = goog.dom.createElement(goog.dom.TagName.DIV);
            this._body.id = this._type;
            this._body.style.position = "absolute";
            this._body.style.background = "#98ca6a";
            goog.style.setPosition(this._body, this._position);
            goog.style.setSize(this._body, this._size);
            document.body.appendChild(this._body);
        },

        /**
         * @public
         * @param position {goog.math.Coordinate}
         */
        setPosition:function(position)
        {
            goog.style.setPosition(this._body, position);
        },

        /**
         * @public
         * @returns {goog.math.Coordinate}
         */
        getPosition:function()
        {
            return this._position;
        }
    })
});