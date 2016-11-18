const webpack = require('webpack');
const path = require('path');

const config = {
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                presets: [
                    "es2015",
                    "react",
                    "stage-0"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;
