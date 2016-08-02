goog.provide("ispring.task2.Circle");

goog.require("goog.style");
goog.require("goog.dom");
goog.require("goog.array");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Circle = goog.defineClass(null, {
        constructor:function()
        {
            /**@private*/
            this._position = ispring.task2.Circle.POSITION;

            /**@private {boolean}*/
            this._timeRemove = false;

            /**@private {Array}*/
            this._elements = [];
            this._create();
        },



        /**
         * @private
         */
        _create:function()
        {
            // this.move();
            // goog.style.setSize(this._body, this._size.width, this._size.height);
            for (var i = 0; i != 2; ++i)
            {
                var circle = goog.dom.createElement("div");
                circle.id = "circle";
                goog.style.setPosition(circle, this._position.x, this._position.y);
                document.body.appendChild(circle);
                goog.array.insert(this._elements, circle);
            }

        },

        /**
         * @public
         *
         */
        move:function()
        {
            this._position.y += ispring.task2.Obstacles.MOVE_STEP;
            goog.style.setPosition(this._body, this._position.x, this._position.y);
        },

        /**
         * @public
         */
        checkGoingTheScreen:function()
        {
            if (!this._timeRemove && this._position.y > ispring.task2.Game.HEIGHT)
            {
                this._timeRemove = true;
            }
        },

        /**
         * @public
         */
        remove:function ()
        {
            document.body.removeChild(this._body);
        },

        /**
         * @public
         * @returns {boolean}
         */
        getTimeRemove:function()
        {
            return this._timeRemove;
        },

        statics:
        {
            POSITION: {x : 550, y : 450},
            RADIUS: 100
        }
    });

});
