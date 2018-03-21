const paths = require('./paths');

module.exports = {
    extensions: ['.js', '.vue'],
    modules: [paths.src, paths.node_modules],
    alias: {
        vue: 'vue/dist/vue'
    }
};
