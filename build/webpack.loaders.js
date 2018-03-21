const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const eslintOptions = {
    emitWarning: true,
    formatter: require('eslint-friendly-formatter')
};

function getScssLoaders (options) {
    return [
        {
            loader: 'css-loader',
            options: {
                sourceMap: options.sourceMap,
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: options.sourceMap,
                ident: 'postcss',
                plugins: () => {
                    return [
                        require('autoprefixer')({
                            browsers: [
                                '> 5%',
                                'last 2 versions'
                            ]
                        })
                    ]
                }
            }
        },
        {
            loader: 'sass-loader',
            query: {
                includePaths: [paths.src, paths.scss, paths.node_modules]
            }
        },
        {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    `${paths.scss}/variables/_colors.scss`,
                    `${paths.scss}/utils/_mixins.scss`
                ]
            }
        }
    ];
}

function getVue (options) {
    return {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: getScssLoaders(options),
                            fallback: 'vue-style-loader'
                        }),
                        i18n: '@kazupon/vue-i18n-loader'
                    }
                }
            },
            {
                loader: 'eslint-loader',
                options: eslintOptions
            }
        ]
    };
}

const getScss = function (options) {
    return {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: getScssLoaders(options)
        }),
        include: [paths.src]
    };
};

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        'babel-loader',
        {
            loader: 'eslint-loader',
            options: eslintOptions
        }
    ],
    include: [paths.src]
};

module.exports = {
    getVue,
    getScss,
    js,
    fonts: {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: [paths.fonts],
        loader: 'file-loader?name=fonts/[name].[ext]'
    },
    images: {
        test: /\.(png|svg|jpe?g)$/,
        include: [paths.images],
        loader: 'file-loader?limit=100000&name=img/[name].[ext]'
    }
};
