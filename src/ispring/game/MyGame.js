goog.provide("ispring.game.MyGame");

goog.require("ispring.game.Rectangle");
goog.require("ispring.game.Triangle");
goog.require("ispring.game.Outline");
goog.require("goog.events");
goog.require("goog.dom");

goog.scope(function() {
    /**
     * @constructor
     */
    ispring.game.MyGame = goog.defineClass(null, {
        constructor: function() {
            this._canvas = goog.dom.createElement("canvas");
            this._canvas.id = "testCanvas";
            this._canvas.width = 1366;
            this._canvas.height = 768;
            document.body.appendChild(this._canvas);

            var btn = goog.dom.createElement(goog.dom.TagName.INPUT);
            btn.id = "btn";
            btn.type = "submit";
            document.body.appendChild(btn);

            btn.addEventListener("click", goog.bind(this._restart, this));

            this._ctx = this._canvas.getContext('2d');
            this._score = 0;
            var arrayColor = this._getNewColorArray();
            this._rectangle = new ispring.game.Rectangle(this._ctx, arrayColor, [300, 75, 300, 150]);
            this._triangle = new ispring.game.Triangle(this._ctx, arrayColor);
            this._outline = new ispring.game.Outline(this._ctx, arrayColor, [15, 55, 900, 500])


            goog.events.listen(document, goog.events.EventType.CLICK, goog.bind(function(e)
            {
                if (this._triangle.getColor() == this._rectangle.getColor()) {
                    ++this._score;
                    this._triangle.createNewNumberColor();
                    this._triangle.run();
                    this._textRewriting();
                }
                else
                {
                    this._rectangle.stop();
                    this._outline.stop();
                    this._lose();
                }
            }, this));
        },


        /**
         *
         * @private
         */
        _restart:function(e)
        {
            this._ctx.clearRect(0, 0, ispring.game.MyGame.WIDTH_CANVAS, ispring.game.MyGame.HEIGHT_CANVAS);
            this._score = 0;
            this.run();
        },

        /**
         *
         * @private
         */
        _getNewColorArray:function()
        {
            var listColor = [];
            for (var i = 0; i != ispring.game.Shape.NUMBER_OF_COLORS; ++i)
            {
                var red = this._getRandomNumberColor(0, 255);
                var green = this._getRandomNumberColor(0, 255);
                var blue = this._getRandomNumberColor(0, 255);
                var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
                var isColor = false;
                listColor.push(newColor);
            }
            return listColor;
        },

        /**
         *
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
         * @private
         */
        _createText:function()
        {
            this._ctx.fillStyle = "#00F";
            this._ctx.font = "italic 30pt Arial";
            this._ctx.textBaseline = "top";
            this._ctx.fillText("Score " + this._score, 930, 55);

        },

        /**
         * @private
         */
        _lose:function()
        {
            this._ctx.fillStyle = "#00F";
            this._ctx.font = "italic 30pt Arial";
            this._ctx.textBaseline = "top";
            this._ctx.fillText("You lose", 130, 130);
        },
        
        /**
         * @private
         */
        _textRewriting:function()
        {
            this._ctx.clearRect(930, 55, 1200, 100);
            this._createText();
        },

        /**
         * @private
         */
        _createGameElements:function()
        {
            this._createText();
            this._rectangle.run();
            this._outline.run();
            this._triangle.run();
        },
        /**
         * @public
         */
        run:function()
        {
            this._createGameElements();
        },

        statics: {
            WIDTH_CANVAS: 1366,
            HEIGHT_CANVAS: 768
        }

    });
});

