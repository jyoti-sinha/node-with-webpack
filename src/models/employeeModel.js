const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        city: String,
        zipcode: String,
        geo:{
            lat: String,
            lng: String
        }
    },
    phone: String,
    website: String,
    company: String
});

module.exports = mongoose.model('employeeModel', EmployeeSchema, 'employees');