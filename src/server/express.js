import express from 'express'

const server = express()
const staticMiddleware = express.static('dist')

const webpack = require('webpack')
const config = require('../../config/webpack.config')
const compiler = webpack(config)

const webpackHotMiddleware = require('webpack-hot-middleware')(
    compiler
)
const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
)



server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)



server.use(staticMiddleware)
server.listen(3000, () => { 
    console.log('Server is listenig.')
})