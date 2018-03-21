const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const workboxConfig = require('./workbox-config');

module.exports = {
    cleanDist (appName) {
        return new CleanWebpackPlugin([path.resolve(paths.dist, appName)], {
            root: paths.dist,
            verbose: true,
            dry: false,
            exclude: []
        })
    },
    indexHtml (pluginOptions) {
        const baseConfig = {
            template: './src/index.html',
            filename: 'index.html'
        };

        return new HtmlWebpackPlugin(Object.assign(baseConfig, pluginOptions));
    },
    extractCss () {
        return new ExtractTextPlugin('styles.[hash].css')
    },
    copyImages () {
        return new CopyWebpackPlugin([{ from: 'src/assets/img', to: 'img' }])
    },
    copyFonts () {
        return new CopyWebpackPlugin([{ from: 'src/assets/fonts', to: 'fonts' }])
    },
    aggressiveMerging () {
        return new webpack.optimize.AggressiveMergingPlugin();
    },
    occurencyOrder () {
        return new webpack.optimize.OccurrenceOrderPlugin();
    },
    uglifyJs () {
        return new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        });
    },
    workbox () {
        return new WorkboxPlugin.GenerateSW(workboxConfig);
    }
};
