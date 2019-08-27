const express = require('express');
const db = require('./database');
const server = express()
const staticMiddleware = express.static('dist')
const path = require('path')
const router = require('./router');

//WEBPACK CONFIGURATION
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
server.use('/', router) //express route
server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)
server.use(staticMiddleware) //dist folder


//VIEW ENGINE SETUP
const hbs = require( 'express-handlebars');
server.set('views', path.resolve(__dirname, '../views/'));
server.set('view engine', 'hbs');
server.engine( 'hbs', hbs({
  extname: '.hbs',
  defaultView: 'main',
  layoutsDir: path.resolve(__dirname, '../views/layouts/'),
  partialsDir: path.resolve(__dirname, '../views/partials/')
}));





db.connect(() => {
    server.listen(3000, () => { 
        console.log('Server is listenig with mongoose.')
    })
})