const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    }, 
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' //Absolute path
    },
    devServer: {
        contentBase: 'dist',
        hot: true,
        overlay: true,
        states: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './src/views/index.hbs',
            title:'Handlebars vew engine'
        })
    ]
}