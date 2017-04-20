const emoji = require("showdown-emoji")
    , Bloggify = require("bloggify")
    ;

module.exports = () => {
    Bloggify.options.adapter.parse.converterOptions.extensions.push(emoji);
};
