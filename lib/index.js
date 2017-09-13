const emoji = require("showdown-emoji")
    , Bloggify = require("bloggify")

module.exports = () => {
    Bloggify.adapter.options.parse.converterOptions.extensions.push(emoji)
}
