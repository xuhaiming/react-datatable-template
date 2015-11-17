var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        main:"./src/main.jsx",
        contact:"./src/contact.jsx"
    },
    output: {
        filename: "./assets/js/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query:
                {
                    presets:['react', 'es2015']
                }
            },
            {test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            filename: "assets/js/common.js"
        })
    ]
};