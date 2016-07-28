goog.provide("ispring.task2.Game");

goog.require("ispring.task2.Obstacles");
goog.require("ispring.task2.Outline");
goog.require("ispring.MyTimer");
goog.require("goog.dom");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Game = goog.defineClass(null, {
        constructor:function()
        {
            this._canvas = goog.dom.createElement("canvas");
            this._canvas.id = "testCanvas";
            this._canvas.width = ispring.task2.Game.WIDTH;
            this._canvas.height = ispring.task2.Game.HEIGHT;
            document.body.appendChild(this._canvas);
            this._ctx = this._canvas.getContext('2d');
            this._obstacle = new ispring.task2.Obstacles(5);
            this._outline = new ispring.task2.Outline(this._ctx, [0, 0, 500, ispring.task2.Game.HEIGHT]);
            //this._timer = ispring.MyTimer(goog.bind(this._checkObstacle, this));
        },

        /**
         * @public
         */
        createGameElements:function()
        {
            this._obstacle.run();
            // this._outline.draw();

            //this._timer.start();
        },
        /**
         *
         * @private
         */
        _checkObstacle:function()
        {
            if (this._obstacle.timeRemove)
            {
                console.log("finish");
                this._obstacle.stop();
            }
            console.log("2222222");
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
            HEIGHT:768
        }
    });

});
