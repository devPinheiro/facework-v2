require('dotenv').config()
const path = require('path')
const glob = require('glob-all')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniExtractCssPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:/]+/g) || []
    }
}

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        index: [
            devMode && 'webpack-hot-middleware/client?reload=true',
            './client/index.js'
        ].filter(Boolean)
    },
    output: {
        path: path.resolve(__dirname, 'server/public/'),
        filename: 'app.js',
        publicPath: '/',
        chunkFilename: '[name].app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniExtractCssPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        devMode && new webpack.HotModuleReplacementPlugin(),
        !devMode &&
            new PurgecssPlugin({
                paths: glob.sync(
                    [
                        path.join(__dirname, 'client/**/*.js'),
                        path.join(__dirname, 'client/**/*.css')
                    ],
                    { nodir: true }
                ),
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ['html', 'js', 'css']
                    }
                ]
            }),
        new MiniExtractCssPlugin({
            filename: 'app.css'
        }),
        new webpack.DefinePlugin({
            'process.env.PRODUCTION_URL': 'http://157.230.123.137',

            'process.env.DEVELOPMENT_URL': 'http://157.230.123.137',
            'process.env.BROADCASTER': JSON.stringify(process.env.BROADCASTER),
            'process.env.BROADCASTER_KEY': JSON.stringify(
                process.env.BROADCASTER_KEY
            ),
            'process.env.BROADCASTER_CLUSTER': JSON.stringify(
                process.env.BROADCASTER_CLUSTER
            )
        })
    ].filter(Boolean),
    optimization: {
        minimizer: [
            devMode &&
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
            new OptimizeCSSAssetsPlugin({}),
            devMode && new webpack.HotModuleReplacementPlugin()
        ].filter(Boolean)
    }
}
