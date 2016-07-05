goog.provide("ispring.game.Triangle");
goog.require("ispring.game.Shape");

goog.scope(function() {
    var Shape = ispring.game.Shape;

    /**
     * @constructor
     */
    ispring.game.Triangle = goog.defineClass(Shape, {
        constructor: function(ctx, newArrayColor) {
            goog.base(this, ctx, newArrayColor);
        },

        /**
         * @override
         * @public
         */
        draw:function()
        {
            // alert("triangle = " + this._colorNumber);
            this._ctx.fillStyle = this._colorArray[this._colorNumber];
            this._ctx.beginPath();
            // Первое число - x, второе - y
            this._ctx.moveTo(450, 300);
            this._ctx.lineTo(350, 350);
            this._ctx.lineTo(550, 350);
            this._ctx.fill();
        }



    });
});