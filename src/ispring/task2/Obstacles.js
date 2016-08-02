goog.provide("ispring.task2.Obstacles");

goog.require("ispring.MyTimer");
goog.require("ispring.task2.Block")
goog.require("goog.array");

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
            this._arrayElements = [];//Заменить на goog.array

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
                goog.array.insert(elements, new block(number, {width : 75, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 35, y : -45 }));
                goog.array.insert(elements, new block(number, {width : 150, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 175, y : -45 }));
                goog.array.insert(elements, new block(number, {width : 75, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 390, y : -45 }));
            }
            else if (typeBlock == 2)
            {
                goog.array.insert(elements, new block(number, {width : 150, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 50, y : -45 }));
                goog.array.insert(elements, new block(number, {width : 150, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 300, y : -45 }));
            }
            else if (typeBlock == 3)
            {
                for (var i = 1; i != 5; ++i)
                {
                    goog.array.insert(elements, new block(number, {width : 50, height : BLOCKS_HEIGHT},
                        {x : OUTLINE_POSITION.x + 60 * i + (i > 1 ? 50 * (i - 1) : 0), y : -45 }));
                }
            }
            else if (typeBlock == 4)
            {
                goog.array.insert(elements, new block(number, {width : 300, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 100, y : -45 }));
            }
            else if (typeBlock == 5)
            {
                goog.array.insert(elements, new block(number, {width : BLOCKS_HEIGHT, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 150, y : -45 }));
                goog.array.insert(elements, new block(number, {width : BLOCKS_HEIGHT, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 350, y : -45 }));
            }
            else if (typeBlock == 6)
            {
                goog.array.insert(elements, new block(number, {width : BLOCKS_HEIGHT, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 150, y : -45 }));
                goog.array.insert(elements, new block(number, {width : BLOCKS_HEIGHT, height : BLOCKS_HEIGHT},
                    {x : OUTLINE_POSITION.x + 250, y : -45 }));
            }
            return elements;
        },

        /**
         *
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
            // this._timerCreateObstacles.start();
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
                    // console.log("removed");
                    // console.log(this._arrayElements.length);
                    element.remove();
                    this._arrayElements.splice(i, 1);
                    --i;
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
