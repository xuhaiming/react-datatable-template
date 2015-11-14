module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:
                {
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};