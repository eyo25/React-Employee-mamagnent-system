const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    salary: {
        required: true,
        type: Number
    },
})
module.exports = mongoose.model('Employee', EmployeeSchema)