goog.provide("Sample");

goog.require("ispring.task2.Game");

/**
 * @export
 */
Sample.start = function()
{
	var game = new ispring.task2.Game();
	game.run();
};

