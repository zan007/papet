const devServer = require('./webpack.devserver');
const loaders = require('./webpack.loaders');
const path = require('path');
const paths = require('./paths');
const plugins = require('./webpack.plugins');
const resolve = require('./webpack.resolve');
const buildConstants = require('./build-constants');

module.exports = {
    entry: {
        app: './src/app/index-app.js'
    },
    output: {
        path: path.resolve(paths.dist, buildConstants.APP_NAME),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve,
    devtool: 'inline-source-map',
    devServer: devServer.getConfig(buildConstants.APP_NAME),
    module: {
        rules: [
            loaders.getVue({ sourceMap: true }),
            loaders.js,
            loaders.getScss({ sourceMap: true }),
            loaders.fonts,
            loaders.images
        ]
    },
    plugins: [
        plugins.indexHtml({
            title: 'Papeteria.com',
            id: 'app'
        }),
        plugins.extractCss(),
        plugins.copyImages(),
        plugins.copyFonts(),
        plugins.aggressiveMerging(),
        plugins.occurencyOrder(),
        plugins.workbox()
    ]
};
