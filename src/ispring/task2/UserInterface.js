goog.provide("ispring.task2.UI");


goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.task2.UI = goog.defineClass(null, {
        constructor: function () {
            /**@type {!Element}*/
            var brd = goog.dom.createElement(goog.dom.TagName.DIV);
            brd.id = "brd";
            goog.style.setPosition(brd, ispring.task2.UI.OUTLINE_POSITION);
            goog.style.setSize(brd, ispring.task2.UI.OUTLINE_SIZE);
            document.body.appendChild(brd);

            this._scoreTable = goog.dom.createElement(goog.dom.TagName.DIV);
            this._scoreTable.id = "scoreTable";
            goog.style.setPosition(this._scoreTable, ispring.task2.UI.SCORE_TABLE_POSITION);
            goog.style.setSize(this._scoreTable, ispring.task2.UI.SCORE_TABLE_SIZE);
            document.body.appendChild(this._scoreTable);
            this.setScore(0);


        },

        setScore: function (score)
        {
            this._scoreTable.innerHTML = "Score " + score;
        },

        statics:
        {
            WIDTH : 1366,
            HEIGHT : 768,
            OUTLINE_POSITION : new goog.math.Coordinate(300, -30),
            OUTLINE_SIZE : new goog.math.Size(500, 800),
            SCORE_TABLE_POSITION : new goog.math.Coordinate(900, 200),
            SCORE_TABLE_SIZE : new goog.math.Size(300, 150)
        }
    });

});