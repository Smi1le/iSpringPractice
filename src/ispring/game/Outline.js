goog.provide("ispring.game.Outline");
goog.require("ispring.game.Shape");

goog.scope(function() {
    var Shape = ispring.game.Shape;

    /**
     * @constructor
     */
    ispring.game.Outline = goog.defineClass(Shape, {
        constructor: function(ctx, newArrayColor, size) {
            goog.base(this, ctx, newArrayColor);
            this._size = size;
        },

        /**
         * @public
         * @override
         */
        draw:function()
        {
            this.createNewNumberColor();
            this._ctx.strokeStyle = this._colorArray[this._colorNumber];
            this._ctx.strokeRect(this._size[0], this._size[1],
                this._size[2], this._size[3]);
        }
    });
}); 