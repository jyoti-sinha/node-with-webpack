const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HandlebarsPlugin = require('handlebars-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    }, 
    output: {
        filename: '[name]-bundle-[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' //Absolute path
    },
    devServer: {
        contentBase: 'dist',
        hot: true,
        overlay: true,
        stats: {
            colors: true
        } 
    },
    resolve: {
        extensions: ['*', '.js'],
        modules: [
            path.resolve(__dirname, '..', 'node_modules'),
        ],
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
                test: /\.scss|\.sass$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(webm|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: 'videos/[name].[hash:7].[ext]'
                }
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
                        loader: 'handlebars-loader',
                        query: {
                            partialDirs: [
                                path.join(__dirname, '../src/views', 'partials')
                            ],
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './src/views/layouts/main.hbs',
            title:'Handlebars vew engine'
        }),

        new HandlebarsPlugin({
            // path to hbs entry file(s)
            entry: path.join(process.cwd(), "src", "views", "*.hbs"),
            // output path and filename(s). This should lie within the webpacks output-folder
            // if ommited, the input filepath stripped of its extension will be used
            output: path.join(process.cwd(), "dist", "[name].html"),
            // data passed to main hbs template: `main-template(data)`
            //data: require("./app/data/project.json"),
            // or add it as filepath to rebuild data on change using webpack-dev-server
            //data: path.join(__dirname, "app/data/project.json"),
      
            // globbed path to partials, where folder/filename is unique
            partials: [
              path.join(process.cwd(), "src", "views", "partials", "*", "*.hbs") 
            ],
      
            // register custom helpers. May be either a function or a glob-pattern
            // helpers: {
            //   nameOfHbsHelper: Function.prototype,
            //   projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
            // },
      
            // hooks
            // getTargetFilepath: function (filepath, outputTemplate) {},
            // getPartialId: function (filePath) {}
            onBeforeSetup: function (Handlebars) {},
            onBeforeAddPartials: function (Handlebars, partialsMap) {},
            onBeforeCompile: function (Handlebars, templateContent) {},
            onBeforeRender: function (Handlebars, data) {},
            onBeforeSave: function (Handlebars, resultHtml, filename) {},
            onDone: function (Handlebars, filename) {}
          })
        
    ]
}