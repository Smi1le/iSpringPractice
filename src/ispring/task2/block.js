goog.provide("ispring.task2.Block");

goog.require("goog.style");
goog.require("goog.dom");
goog.require("goog.math");


goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Block = goog.defineClass(null, {
        constructor:function(number, size, pos)
        {
            /**@private {number}*/
            this._number = number;

            /**@private {goog.math.Size}*/
            this._size = size;

            /**@private {goog.math.Coordinate}*/
            this._position = pos;

            /**@private {boolean}*/
            this._timeRemove = false;

            /**@private {boolean}*/
            this._counted = false;

            /**@private {!Element}*/
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
         * @returns {goog.math.Coordinate}
         * @public
         */
        getCenterCoordinates:function()
        {
            var x = this._position.x + (this._size.width / 2);
            var y = this._position.y + (this._size.height / 2);
            return new goog.math.Coordinate(x, y);
        },

        /**
         * @returns {goog.math.Coordinate}
         * @public
         */
        getPosition:function()
        {
            return this._position;
        },

        /**
         * @returns {goog.math.Size}
         * @public
         */
        getSize:function()
        {
            return this._size;
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
         * @returns {boolean}
         */
        getCounted:function()
        {
           return this._counted;
        },

        /**
         * @public
         */
        passedBall:function()
        {
            this._counted = true;
        },

        /**
         * @public
         */
        checkGoingTheScreen:function()
        {
            if (!this._timeRemove && this._position.y > ispring.task2.UI.HEIGHT)
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
