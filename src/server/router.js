const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', (req, res) => { 
    res.render('home', {
        layout: 'main'
    });
    // getList.find({}).limit(5).toArray((err, result) => { //============ FIND ALL ==============
    //     if(err) throw err;
    //     res.render('home', {result: result});
    //     //db.close();  
    // })

    // getList.findOne({'latdec': 9.3418808}, (err, result) => { //============ FIND ONE ==============
    //     if(err) throw err;
    //     res.send(result);
    //     db.close();
    // })
    
    // getList.updateOne({'latdec': 9.3418808}, {$set: {'feature_type': 'ABC'}}, (err, result) => { //============ UPDATE ONE ==============
    //     if(err) throw err;
    //     res.send(result);
    //     db.close();
    // })
})

router.get('/employees', employeeController.index);

module.exports = router; 