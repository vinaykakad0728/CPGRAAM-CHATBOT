const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    ministry: String,
    department: String,
    problem: String
});

module.exports = mongoose.model('UserData', userDataSchema);
