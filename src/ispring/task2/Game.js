goog.provide("ispring.task2.Game");

goog.require("ispring.task2.GL");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");


goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Game = goog.defineClass(null, {
        constructor:function()
        {
            /**@type {!Element}*/
            var brd = goog.dom.createElement(goog.dom.TagName.DIV);
            var outlinePosition = ispring.task2.Game.OUTLINE_POSITION;
            var outlineSize = ispring.task2.Game.OUTLINE_SIZE;
            brd.id = "brd";
            goog.style.setPosition(brd, outlinePosition.x, outlinePosition.y);
            goog.style.setSize(brd, outlineSize.width, outlineSize.height);
            document.body.appendChild(brd);
            this._gl = new ispring.task2.GL();




           
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
            WIDTH : 1366,
            HEIGHT : 768,
            OUTLINE_POSITION : new goog.math.Coordinate(300, -30),
            OUTLINE_SIZE : new goog.math.Size(500, 800)
        }
    });

});
