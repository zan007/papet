const resolve = require('path').resolve;

module.exports = {
    src: resolve(__dirname, '../src'),
    dist: resolve(__dirname, '../dist'),
    node_modules: resolve(__dirname, '../node_modules'),
    scss: resolve(__dirname, '../src/assets/scss'),
    fonts: resolve(__dirname, '../src/assets/fonts'),
    images: resolve(__dirname, '../src/assets/img')
};
