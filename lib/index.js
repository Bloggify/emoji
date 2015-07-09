var Emoji = require("emoji-parser");

// Configs
Emoji.init([__dirname + "/../client/images"]).update();

const PATH_IMAGES = "/api/plugin-file/emoji/images/";

var BloggifyEmoji = module.exports = {};

/**
 * init
 * Inits the processor.
 *
 * @name init
 * @function
 */
BloggifyEmoji.init = function () {
    // Add the new processor
    Bloggify.processors.all.push(BloggifyEmoji.parse)
};

/**
 * parse
 * Parses emoji in the page.
 *
 * @name parse
 * @function
 * @param {Lien} lien The lien object.
 * @param {Object} data The data object.
 * @param {String} content The page string.
 * @return {String} The parsed string.
 */
BloggifyEmoji.parse = function (lien, data, content) {
    return Emoji.parse(content, PATH_IMAGES, {
        classes: "no-lightbox emoji"
    });
};
