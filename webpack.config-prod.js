var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// See https://github.com/petehunt/webpack-howto for some really useful tips


/*
 * Setup the configuration parameters for this build - these
 * are used to either stamp out the index.html template
 * and/or set the value of literals in the code
 *
 * We define variables for the production case
 */
var assetContext = "/register-me";
var routeContext = "";
var cubicleBase = "@cubicleBaseUrl@";

console.log("Build for: production");
console.log("assetContext = " + assetContext);
console.log("routeContext = " + routeContext);
console.log("cubicleBase = " + cubicleBase);

var providerPlugin = new webpack.ProvidePlugin({
    // "Promise": "es6-promise",        FIXME See issue on GitHub: https://github.com/stefanpenner/es6-promise/issues/181
    // "fetch": "imports?this=>global!exports?global.fetch!whatwg-fetch"  FIXME Not sure we really need this
});

var definePlugin = new webpack.DefinePlugin({
    "appLanguageBundle": JSON.stringify("${appLanguageBundle}"),
    "language": JSON.stringify("${language}"),
    "revision": JSON.stringify("${revision}"),
    "allowedLanguages": JSON.stringify("${allowedLanguages}"),
    "allowedLanguagesList": JSON.stringify("${allowedLanguagesList}"),
    "cubicleBaseUrl": JSON.stringify(cubicleBase),
    "assetContext": JSON.stringify(assetContext),
    "WEB_CONTEXT": JSON.stringify(assetContext),
    "ROUTE_CONTEXT": JSON.stringify(routeContext),
    "process.env": {
        "NODE_ENV": JSON.stringify("production")
    }
});

var htmlPlugin = new HtmlWebpackPlugin({
    assetContext: assetContext,
    routeContext: routeContext,
    template: "./src/assets/index.html",
    inject: false,
    filename: "WEB-INF/host.html"
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

var config = {
    entry: {
        'app.cache.en': './src/ts/app.en.ts',
        'app.cache.de': './src/ts/app.de.ts',
        // If we add a language then it will go here. You will also need to update the web.xml allowed_languages parameter to include that language
    },
    output: {
        path:  path.resolve(__dirname, 'webapp'),
        filename: '[name]-[hash].js',
        publicPath: '/register-me/'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.ts', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        providerPlugin,
        definePlugin,
        copyPlugin,
        htmlPlugin
    ]
};

module.exports = config;

