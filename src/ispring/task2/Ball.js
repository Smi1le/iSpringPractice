goog.provide("ispring.task2.Ball");

goog.require("goog.style");
goog.require("goog.dom");
goog.require("goog.array");
goog.require("goog.events");
goog.require("goog.math");
goog.require("ispring.MyTimer");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Ball = goog.defineClass(null, {
        constructor:function()
        {
            /**@private {goog.math.Coordinate}*/
            this._position = ispring.task2.Ball.POSITION;

            /**@private {Array}*/
            this._elements = [];

            /**@private {boolean}*/
            this._isMouseClick = false;

            /**@private {boolean}*/
            this._isMove = false;

            /**@private {ispring.MyTimer}*/
            this._moveTimer = new ispring.MyTimer(goog.bind(this._move, this), ispring.task2.Ball.INTERVAL);

            this._create();

            goog.events.listen(document, goog.events.EventType.MOUSEDOWN, goog.bind(function (e)
            {
                this._isMouseClick = true;
                this._isMove = true;
                this._moveTimer.start();
            }, this));

            goog.events.listen(document, goog.events.EventType.MOUSEUP, goog.bind(function (e)
            {
                this._isMouseClick = false;
            }, this));
        },

        /**
         *
         * @private
         */
        _move:function()
        {
            var sl = ispring.task2.Ball.STRIDE_LENGTH;// Длина шага
            for(var i = 0; i != 2; ++i)
            {
                var circlePosition = goog.style.getPosition(this._elements[i]);
                var centerPoint = ispring.task2.Ball.POSITION;
                var distanceToBorder = ispring.task2.UI.OUTLINE_SIZE.width / 2;
                if ((this._isMouseClick && ((i == 0 && circlePosition.x > centerPoint.x - distanceToBorder + 10) ||
                    (i == 1 && circlePosition.x < centerPoint.x + distanceToBorder +- 10))) || !this._isMouseClick) {
                    console.log("i = " + i);
                    var step = (this._isMouseClick) ? ((i == 0) ? -sl : sl) : ((i == 0) ? sl : -sl);
                    var posX = circlePosition.x + step;
                    goog.style.setPosition(this._elements[i], posX, this._position.y);
                }
            }
            console.log("posX = " + posX);
            if (!this._isMouseClick && posX == ispring.task2.Ball.POSITION.x)
            {
                console.log("false");
                this._moveTimer.stop();
                this._isMove = false;
            }
        },

        /**
         *@returns {Array}
         *@public
         */
        getPosition:function()
        {
            var positions = [];
            for(var i = 0; i != 2; ++i)
            {
                var circlePosition = goog.style.getPosition(this._elements[i]);
                circlePosition.x += ispring.task2.Ball.RADIUS;
                circlePosition.y += ispring.task2.Ball.RADIUS;
                goog.array.insert(positions, circlePosition);
            }
            return positions;
        },

        /**
         * @private
         */
        _create:function()
        {
            var radius = ispring.task2.Ball.RADIUS;
            for (var i = 0; i != 2; ++i)
            {
                var circle = goog.dom.createElement("div");
                circle.id = "circle";
                goog.style.setSize(circle, radius * 2, radius * 2);
                goog.style.setPosition(circle, this._position.x, this._position.y);
                document.body.appendChild(circle);
                goog.array.insert(this._elements, circle);
            }

        },

        /**
         * @public
         * @returns {boolean}
         */
        getIsMove:function()
        {
            return this._isMove;
        },

        statics:
        {
            POSITION: new goog.math.Coordinate(550, 450),//550, 450
            RADIUS: 12,
            STRIDE_LENGTH : 5,
            INTERVAL : 50
        }
    });

});
