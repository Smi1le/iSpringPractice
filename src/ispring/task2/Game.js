goog.provide("ispring.task2.Game");

goog.require("ispring.task2.Obstacles");
goog.require("ispring.task2.Circle");
goog.require("goog.dom");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Game = goog.defineClass(null, {
        constructor:function()
        {
            /**@private {ispring.task2.Obstacles}*/
            this._obstacle = new ispring.task2.Obstacles();



            /**@type {!Element}*/
            var brd = goog.dom.createElement(goog.dom.TagName.DIV);
            brd.id = "brd";
            document.body.appendChild(brd);

            /**@private {ispring.task2.Circle}*/
            this._circle = new ispring.task2.Circle();
        },

        /**
         * @public
         */
        createGameElements:function()
        {
            this._obstacle.run();
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
            WIDTH:1366,
            HEIGHT:768,
            OUTLINE_POSITION : {x : 300, y : -30}
        }
    });

});
