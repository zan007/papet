const devServer = require('./webpack.devserver');
const loaders = require('./webpack.loaders');
const path = require('path');
const paths = require('./paths');
const plugins = require('./webpack.plugins');
const resolve = require('./webpack.resolve');
const buildConstants = require('./build-constants');

module.exports = {
    entry: {
        app: './src/styleguide/indexStyleguide.js'
    },
    output: {
        path: path.resolve(paths.dist, buildConstants.STYLE_GUIDE_APP_NAME),
        filename: '[name].[hash].js'
    },
    resolve,
    devtool: false,
    devServer: devServer.getConfig(buildConstants.STYLE_GUIDE_APP_NAME),
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
        plugins.cleanDist(buildConstants.STYLE_GUIDE_APP_NAME),
        plugins.indexHtml({
            title: 'Papeteria.com | styleguide',
            id: 'styleguide'
        }),
        plugins.extractCss(),
        plugins.copyImages(),
        plugins.copyFonts(),
        plugins.aggressiveMerging(),
        plugins.occurencyOrder()
    ]
};
