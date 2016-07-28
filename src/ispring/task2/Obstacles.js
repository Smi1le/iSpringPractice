goog.provide("ispring.task2.Obstacles");

goog.require("ispring.MyTimer");
goog.require("ispring.task2.Block")
goog.require("goog.array");
goog.require("goog.style");
goog.require("goog.dom");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.Obstacles = goog.defineClass(null, {
        constructor:function(number)
        {
            this._number = number;
            this._arrayElements = [];//Заменить на goog.array
            this._timerRedraw = new ispring.MyTimer(goog.bind(this._redraw, this), 100);
            this._timerCreateObstacles = new ispring.MyTimer(goog.bind(this._createObstacle, this), 3000);
            this.timeRemove = false;
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
            if (typeBlock == 1)
            {
                //35 - отходит от края , чтобы выглядело по середине
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 75, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 35, y : -45 }));
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 150, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 175, y : -45 }));
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 75, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 390, y : -45 }));
            }
            else if (typeBlock == 2)
            {
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 150, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 50, y : -45 }));
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 150, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 300, y : -45 }));
            }
            else if (typeBlock == 3)
            {
                for (var i = 1; i != 5; ++i)
                {
                    goog.array.insert(elements, new ispring.task2.Block(number, {width : 50, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                        {x : ispring.task2.Outline.POSITION.x + 60 * i + (i > 1 ? 50 * (i - 1) : 0), y : -45 }));
                }
            }
            else if (typeBlock == 4)
            {
                goog.array.insert(elements, new ispring.task2.Block(number, {width : 300, height : ispring.task2.Obstacles.BLOCKS_HEIGHT},
                    {x : ispring.task2.Outline.POSITION.x + 100, y : -45 }));
            }
            return elements;
        },

        /**
         *
         * @private
         */
        _createObstacle:function()
        {
            // var obstacleType = ;
            var obstacleType = this._getRandomNumber(1, 4);
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
            // this._createObstacle();
            this._timerCreateObstacles.start();
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
            this.draw();
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
            MOVE_STEP : 5,
            COLOR : "rgb(40, 255, 100)",
            BLOCKS_HEIGHT : 25
        }
    });

});
