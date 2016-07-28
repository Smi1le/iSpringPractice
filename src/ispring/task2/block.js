goog.provide("ispring.task2.Block");

goog.require("goog.style");
goog.require("goog.dom");


goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Block = goog.defineClass(null, {
        constructor:function(number, size, pos)
        {
            this._number = number;
            this._size = size;
            this._position = pos;
            this._timeRemove = false;
            this._body = goog.dom.createElement("div");
            this._body.id ="block";
            this._body.name = "block" + number;
            document.body.appendChild(this._body);
            this._createNewBlock();
        },



        /**
         * @private
         */
        _createNewBlock:function()
        {
            this.move();
            goog.style.setSize(this._body, this._size.width, this._size.height);
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
        }
    });

});
