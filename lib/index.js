const emoji = require("showdown-emoji");

module.exports = (conf, bloggify) => {
    bloggify.options.adapter.parse.converterOptions.extensions.push(emoji);
};
