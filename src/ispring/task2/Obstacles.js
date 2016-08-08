goog.provide("ispring.task2.Obstacles");

goog.require("ispring.MyTimer");
goog.require("ispring.task2.Block")
goog.require("goog.array");
goog.require("goog.math");


goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Obstacles = goog.defineClass(null, {
        constructor:function()
        {
            /**@private {number}*/
            this._number = 0;

            /**@private {Array}*/
            this._arrayElements = [];

            /**@private {ispring.MyTimer}*/
            this._timerRedraw = new ispring.MyTimer(goog.bind(this._redraw, this), 100);

            /**@private {number}*/
            this._remainingDistance = ispring.task2.Obstacles.DISTANCE_BETWEEN_BLOCKS;
        },

        /**
         *
         * @param number
         * @param typeBlock
         * @returns {Array}
         * @private
         */
        _getNewObstacle:function(number, typeBlock)
        {
            var elements = [];
            //Первый тип блоков
            console.log(typeBlock);
            var block = ispring.task2.Block;
            var BLOCKS_HEIGHT = ispring.task2.Obstacles.BLOCKS_HEIGHT;
            var OUTLINE_POSITION = ispring.task2.Game.OUTLINE_POSITION;
            if (typeBlock == 1)
            {
                //35 - отходит от края , чтобы выглядело по середине
                goog.array.insert(elements, new block(number, new goog.math.Size(75, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 60, -45 )));
                goog.array.insert(elements, new block(number, new goog.math.Size(150,BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 185, -45 )));
                goog.array.insert(elements, new block(number, new goog.math.Size(75, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 385, -45 )));
            }
            else if (typeBlock == 2)
            {
                goog.array.insert(elements, new block(number, new goog.math.Size(150, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 60, -45 )));
                goog.array.insert(elements, new block(number, new goog.math.Size(150, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 310, -45 )));
            }
            else if (typeBlock == 3)
            {
                for (var i = 1; i != 5; ++i)
                {
                    goog.array.insert(elements, new block(number, new goog.math.Size(50, BLOCKS_HEIGHT),
                        new goog.math.Coordinate(OUTLINE_POSITION.x + 60 * i + (i > 1 ? 50 * (i - 1) : 0), -45 )));
                }
            }
            else if (typeBlock == 4)
            {
                goog.array.insert(elements, new block(number, new goog.math.Size(300, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 110, -45 )));
            }
            else if (typeBlock == 5)
            {
                goog.array.insert(elements, new block(number, new goog.math.Size(BLOCKS_HEIGHT, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 160, -45 )));
                goog.array.insert(elements, new block(number, new goog.math.Size(BLOCKS_HEIGHT, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 360, -45 )));
            }
            else if (typeBlock == 6)
            {
                goog.array.insert(elements, new block(number, new goog.math.Size(BLOCKS_HEIGHT, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 160, -45 )));
                goog.array.insert(elements, new block(number, new goog.math.Size(BLOCKS_HEIGHT, BLOCKS_HEIGHT),
                    new goog.math.Coordinate(OUTLINE_POSITION.x + 260, -45 )));
            }
            return elements;
        },

        /**
         * @private
         */
        _createObstacle:function()
        {
            var obstacleType = this._getRandomNumber(1, 6);
            var newObstacles = this._getNewObstacle(++this._number, obstacleType);
            for(var i = 0; i != newObstacles.length; ++i)
            {
                goog.array.insert(this._arrayElements, newObstacles[i]);
            }
        },

        /**
         *
         * @public
         */
        draw:function()
        {
            for(var i = 0; i != this._arrayElements.length; ++i)
            {
                var element = this._arrayElements[i];
                element.move();
            }
        },

        /**
         * @public
         */
        run:function()
        {
            this._createObstacle();
            this.draw();
            this._timerRedraw.start();

        },
        /**
         *
         * @private
         */
        _redraw:function()
        {
            for (var i = 0; i != this._arrayElements.length; ++i)
            {
                var element = this._arrayElements[i];
                element.checkGoingTheScreen();
                if (element.getTimeRemove())
                {
                    element.remove();
                    this._arrayElements.splice(i--, 1);
                }

            }
            this._remainingDistance -= ispring.task2.Obstacles.MOVE_STEP;
            this.draw();
            if (this._remainingDistance <= 0)
            {
                this._createObstacle();
                this._remainingDistance =  ispring.task2.Obstacles.DISTANCE_BETWEEN_BLOCKS;
            }
        },

        /**
         * @public
         * @returns {Array}
         */
        getListObstacles:function()
        {
            return this._arrayElements;
        },

        /**
         * @public
         */
        stop:function()
        {
            alert("stop obstacle");
            this._timerRedraw.stop();
            
        },

        /**
         *
         * @param max
         * @param min
         * @returns {number}
         * @private
         */
        _getRandomNumber:function(min, max)
        {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        },


        statics:
        {
            INDENT : 200,
            MOVE_STEP : 3,
            BLOCKS_HEIGHT : 40,
            DISTANCE_BETWEEN_BLOCKS : 150
        }
    });

});
