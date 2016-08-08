goog.provide("ispring.Shapes.Controller");

goog.require("ispring.Shapes.Rectangle");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function()
{
    /**
     * @constructor
     */
    ispring.Shapes.Controller = goog.defineClass(null, {
        constructor:function(model, leftView, rightView)
        {
            this._model = model;
            this._leftView = leftView;
            this._rightView = rightView;

            var btn = goog.dom.createElement(goog.dom.TagName.INPUT);
            btn.id = "btn";
            btn.type = "submit";
            btn.value = "Нажми меня";
            goog.style.setPosition(btn, new goog.math.Coordinate(300, 0));
            goog.style.setSize(btn, new goog.math.Size(100, 50));
            document.body.appendChild(btn);
            btn.addEventListener("click", goog.bind(this._createShape, this));
        },

        /** 
         * @private
         */
        _createShape:function()
        {
            // var triangle = new ispring.Shapes.Rectangle(new goog.math.Coordinate(200, 200), new goog.math.Size(150, 150), "type");
            // this._model.addShape(triangle);
            this._leftView.createShape();
            this._rightView.createShape();
        },
    })
});
