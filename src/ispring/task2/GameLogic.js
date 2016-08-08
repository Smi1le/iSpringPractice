goog.provide("ispring.task2.GL");

goog.require("ispring.task2.Obstacles");
goog.require("ispring.task2.Ball");
goog.require("ispring.MyTimer");



goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.GL = goog.defineClass(null, {
        constructor: function (ui)
        {
            /**@private {number}*/
            this._score = 0;

            /**@private {ispring.task2.Obstacles}*/
            this._obstacles = new ispring.task2.Obstacles();

            /**@private {ispring.task2.Ball}*/
            this._ball = new ispring.task2.Ball();

            /**@private {ispring.MyTimer}*/
            this._checkCollTimer = new ispring.MyTimer(goog.bind(this.checkCollision, this), ispring.task2.GL.INTERVAL_CHECK_COLLISION);

            /**@private {ispring.task2.UI}*/
            this._ui = ui;
        },

        /** @public */
        run: function () 
        {
            this._obstacles.run();
            // this.checkCollision();
            this._checkCollTimer.start();
        },


        /**
         * @public
         */
        checkCollision: function () 
        {
            var listObstacles = this._obstacles.getListObstacles();
            var ballRadius = ispring.task2.Ball.RADIUS;
            var numCP = ispring.task2.GL.NUMBER_CONTROL_POINTS;
            var HALF_BLOCK_HEIGHT = ispring.task2.Obstacles.BLOCKS_HEIGHT / 2;
            var degree = 360 / numCP;
            outer: for(var i = 0; i != listObstacles.length; ++i)
            {
                var centerCoordinates = listObstacles[i].getCenterCoordinates();
                var posBall = this._ball.getPosition();
                for(var j = 0; j != posBall.length; ++j)
                {

                    if (Math.abs(posBall[j].y - centerCoordinates.y) < (ballRadius + HALF_BLOCK_HEIGHT))
                    {
                        for (var k = 0; k != numCP; ++k)
                        {
                            var radian = (degree * k) * Math.PI / 180;
                            var circlePosX = posBall[j].x + ballRadius * Math.cos(radian);
                            var circlePosY = posBall[j].y + ballRadius * Math.sin(radian);
                            var blockPos = listObstacles[i].getPosition();
                            var blockSize = listObstacles[i].getSize();
                            if ((blockPos.x <= circlePosX && circlePosX <= blockPos.x + blockSize.width) &&
                                (blockPos.y <= circlePosY && circlePosY <= blockPos.y + blockSize.height))
                            {
                                this._obstacles.stop();
                                this._checkCollTimer.stop();
                                break outer;
                            }
                        }
                    }
                }
                if((centerCoordinates.y - posBall[0].y > ballRadius + HALF_BLOCK_HEIGHT) && !listObstacles[i].getCounted())
                {
                    listObstacles[i].passedBall();
                    this._ui.setScore(++this._score);
                }
            }
            console.log("yes");
        },

        /**
         * @private
         */
        _stopCheckCollision:function()
        {

        },

        statics:
        {
            INTERVAL_CHECK_COLLISION : 20,
            NUMBER_CONTROL_POINTS : 12
        }

    });
});
