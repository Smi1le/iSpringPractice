goog.provide("Sample");

// goog.require("ispring.Shapes.Rectangle");
goog.require("ispring.Shapes.Model");
goog.require("ispring.Shapes.LeftView");
goog.require("ispring.Shapes.RightView");
goog.require("ispring.Shapes.Controller");
// goog.require("goog.math");

/**
 * @export
 */
Sample.start = function()
{
	var model = new ispring.Shapes.Model();
	var leftView = new ispring.Shapes.LeftView(model);
	var rightView = new ispring.Shapes.RightView(model);
	var controller = new ispring.Shapes.Controller(model, leftView, rightView);

};

