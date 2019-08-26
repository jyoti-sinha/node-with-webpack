require('@babel/runtime/regenerator')
require('webpack-hot-middleware/client?reload=true')
require('./assets/main.css')

let x = async () => {
    await console.log('Hello from the future!')
    console.log('Done')  
}