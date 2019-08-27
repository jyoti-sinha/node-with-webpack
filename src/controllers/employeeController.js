const Employee = require('../models/employeeModel');

module.exports.index = (req, res) => {   
    Employee.find((err, result) => { //============ FIND ALL ==============
        if(err) throw err;
        res.render('employees', {result: result});
    })
}