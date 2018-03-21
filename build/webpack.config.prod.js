const loaders = require('./webpack.loaders');
const path = require('path');
const paths = require('./paths')
const plugins = require('./webpack.plugins');
const resolve = require('./webpack.resolve');
const buildConstants = require('./build-constants');

module.exports = {
    entry: {
        app: './src/app/index-app.js'
    },
    output: {
        path: path.resolve(paths.dist, buildConstants.APP_NAME),
        filename: '[name].[hash].js'
    },
    resolve,
    devtool: false,
    module: {
        rules: [
            loaders.getVue({ sourceMap: false }),
            loaders.js,
            loaders.getScss({ sourceMap: false }),
            loaders.fonts,
            loaders.images
        ]
    },
    plugins: [
        plugins.cleanDist(buildConstants.APP_NAME),
        plugins.indexHtml({
            title: 'Papeteria.com',
            id: 'app'
        }),
        plugins.extractCss(),
        plugins.copyImages(),
        plugins.copyFonts(),
        plugins.aggressiveMerging(),
        plugins.occurencyOrder(),
        plugins.uglifyJs(),
        plugins.workbox()
    ]
};
