var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Setup the configuration parameters for this build - these
 * are used to either stamp out the index.html template
 * and/or set the value of literals in the code
 *
 * We define variables for the dev case and then override them
 * if this is the production build
 */
var assetContext = "";                                       // in dev we are deployed to the root context
var routeContext = "";                                       // in dev we are deployed to the root context
var buildEnv = "development";

var definePlugin = new webpack.DefinePlugin({
    "process.env": {
    "NODE_ENV": JSON.stringify(buildEnv)
    }
});

var copyPlugin = new CopyWebpackPlugin([
    // Copy directory contents to {output}/
    {from: './src/assets'},
], {
    ignore: [
        // html-webpack-plugin processes the index.html
        'index.html'
    ]
});


var htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/assets/index.html",
    inject: false
});

module.exports = {
    entry: './src/ts/app.tsx',
    output: {
        path: path.resolve(__dirname, 'webapp'),
        filename: 'app.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                }),
              },
              {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader']
                })
              }
        ]
    },
    plugins: [
        definePlugin,
        copyPlugin,
        htmlPlugin,
        new ExtractTextPlugin({
            disable: false,
            filename: "styles.css",
            allChunks: true
          }),
    ]
};