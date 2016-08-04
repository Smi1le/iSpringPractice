goog.provide("ispring.task2.Circle");

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
    ispring.task2.Circle = goog.defineClass(null, {
        constructor:function()
        {
            /**@private*/
            this._position = ispring.task2.Circle.POSITION;

            /**@private {Array}*/
            this._elements = [];

            /**@private {boolean}*/
            this._isMouseClick = false;

            /**@private {ispring.MyTimer}*/
            this._moveTimer = new ispring.MyTimer(goog.bind(this._move, this), ispring.task2.Circle.INTERVAL);

            this._create();

            goog.events.listen(document, goog.events.EventType.MOUSEDOWN, goog.bind(function (e)
            {
                this._isMouseClick = true;
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
            var sl = ispring.task2.Circle.STRIDE_LENGTH;// Длина шага
            for(var i = 0; i != 2; ++i)
            {
                
                var circlePosition = goog.style.getPosition(this._elements[i]);
                var step = (this._isMouseClick) ? ((i == 0) ? -sl : sl) : ((i == 0) ? sl : -sl);
                var posX = circlePosition.x + step;
                goog.style.setPosition(this._elements[i], posX, this._position.y);
            }
            console.log("posX = " + posX);
            if (!this._isMouseClick && posX == ispring.task2.Circle.POSITION.x + sl)
            {
                console.log("false");
                this._moveTimer.stop();
            }
        },

        /**
         * @private
         */
        _create:function()
        {
            var radius = ispring.task2.Circle.RADIUS;
            for (var i = 0; i != 2; ++i)
            {
                var circle = goog.dom.createElement("div");
                circle.id = "circle";
                goog.style.setSize(circle, radius, radius);
                goog.style.setPosition(circle, this._position.x, this._position.y);
                document.body.appendChild(circle);
                goog.array.insert(this._elements, circle);
            }

        },

        statics:
        {
            POSITION: new goog.math.Coordinate(550, 450),
            RADIUS: 25,
            STRIDE_LENGTH : 5,
            INTERVAL : 50
        }
    });

});
