const mongoose = require('mongoose');
const url = "mongodb+srv://dbBornfree:dbBornfreeParallax1991@clustermongo-wbsti.mongodb.net/test?retryWrites=true&w=majority";


module.exports.connect = (callback) => {    
    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        dbName: 'sample_geospatial'
      }, (err => {
        if(err) throw err;
        callback();      
    }))
} 

