const path = require('path');
const paths = require('./paths');
const buildConstants = require('./build-constants');

const DIST_DIR = path.resolve(paths.dist, buildConstants.APP_NAME);

module.exports = {
    //globDirectory: DIST_DIR,
    globPatterns: ['**/*.{html,js,css}'],
    runtimeCaching: [
        {
            urlPattern: /\.(?:woff|woff2|ttf|png|jpeg|svg)$/,
            handler: 'cacheFirst',
            options: {
                expiration: {
                    maxEntries: 10
                }
            }
        }
    ],
    navigateFallback: 'index.html'
};
