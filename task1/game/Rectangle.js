goog.provide("ispring.game.Rectangle");
goog.require("ispring.game.Shape");

goog.scope(function() {
     var Shape = ispring.game.Shape;

    /**
     * @constructor
     */
    ispring.game.Rectangle = goog.defineClass(Shape, {
        constructor: function(ctx, newArrayColor, size) {
            goog.base(this, ctx, newArrayColor);
            this._size = size;
        },

        /**
         * @override
         * @public
         */
        draw:function()
        {
            this.createNewNumberColor();
            this._ctx.fillStyle = this._colorArray[this._colorNumber];
            var size = this._size;
            this._ctx.fillRect(size[0], size[1], size[2], size[3]);
        }
    });
});