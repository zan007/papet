const path = require('path');
const paths = require('./paths');

const ports = {
    app: '3000',
    styleguide: '4000'
};

module.exports = {
    getConfig (appName) {
        return {
            contentBase: path.resolve(paths.dist, appName),
            historyApiFallback: true,
            host: 'localhost',
            inline: true,
            open: true,
            port: ports[appName],
            progress: true,
            publicPath: '/'
        };
    }
};
