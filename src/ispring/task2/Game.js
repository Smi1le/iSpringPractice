goog.provide("ispring.task2.Game");

goog.require("ispring.task2.GL");
goog.require("ispring.task2.UI");
goog.require("goog.math");


goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Game = goog.defineClass(null, {
        constructor:function()
        {
           
            this._ui = new ispring.task2.UI();
            this._gl = new ispring.task2.GL(this._ui);




           
        },

        /**
         * @public
         */
        createGameElements:function()
        {
            this._gl.run();
        },

        /**
         * @public
         */
        run:function()
        {
            this.createGameElements();
        },

        statics:
        {
            WIDTH : document.documentElement.clientWidth,
            HEIGHT : document.documentElement.clientHeight,
            OUTLINE_POSITION : new goog.math.Coordinate(300, -30),
            OUTLINE_SIZE : new goog.math.Size(500, 800)
        }
    });

});
