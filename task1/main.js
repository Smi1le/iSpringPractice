goog.provide("Sample");

goog.require("ispring.game.MyGame");

/**
 * @export
 */
Sample.start = function()
{
	var game = new ispring.game.MyGame();
	game.run();
};

