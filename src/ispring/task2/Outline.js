goog.provide("ispring.task2.Outline");

goog.scope(function() {
    /**
     * @constructor
     */
    ispring.task2.Outline = goog.defineClass(null, {
        constructor: function(ctx) {
            this._ctx = ctx;
            this._draw();
        },

        /**
         * @private
         */
        _draw:function()
        {
            this._ctx.strokeStyle = ispring.task2.Outline.COLOR;
            this._ctx.strokeRect(ispring.task2.Outline.POSITION.x, ispring.task2.Outline.POSITION.y,
                ispring.task2.Outline.SIZE.width, ispring.task2.Outline.SIZE.height);
        },

        statics:
        {
            COLOR : "#FF0000",
            SIZE : {width : 500, height : 800},
            POSITION : {x : 300, y : -10}
        }
    });
}); 