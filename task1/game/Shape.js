goog.provide("ispring.game.Shape");

goog.scope(function() {
    /**
     * @constructor
     */
    ispring.game.Shape = goog.defineClass(null, {
        constructor: function(ctx, newColorArray) {
            /**
             * @type {*|number|HTMLCanvasElement}
             * @protected
             */
            this._ctx = ctx;
            this._colorArray = newColorArray;
            this._colorNumber = 0;
            this.createNewNumberColor();

            /**@private {number}*/
            this._timerId = 0;
        },

        /**
         * @public
         */
        createNewNumberColor:function()
        {
            var oldNumber = this._colorNumber;
            while(oldNumber == this._colorNumber)
            {
                this._colorNumber = this._getRandomNumberColor(0, ispring.game.Shape.NUMBER_OF_COLORS - 1);
            }
        },

        /**
         * @param min
         * @param max
         * @returns {number}
         * @private
         */
        _getRandomNumberColor:function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) - min;
        },
        
        /**
         * @virtual
         * @public
         */
        draw:function () {},

        /**
         * @public
         */
        run:function () {
            var thisClass = ispring.game.Shape;
            this.draw();
            var self = this;
            this.stop();
            this._timerId = setInterval(function Go() {
                self.draw();
                //self._timerId = setTimeout(Go, thisClass.CHANGE_TIMER);
            }, thisClass.CHANGE_TIMER);
        },

        /**
         * @public
         */
        stop:function () {
            clearInterval(this._timerId);
        },

        /**
         *
         * @returns {*}
         * @public
         */
        getColor:function () {
            return this._colorArray[this._colorNumber];
        },

        statics:{
            /**@type {number}*/
            CHANGE_TIMER: 1000,
            NUMBER_OF_COLORS: 3
        }
    });
});

