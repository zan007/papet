module.exports = {
    globPatterns: ['**/*.{html,js,css}'],
    runtimeCaching: [
        {
            urlPattern: /\.(?:woff|woff2|ttf|png|jpeg|svg)$/,
            handler: 'cacheFirst'
        }
    ],
    navigateFallback: 'index.html'
};
