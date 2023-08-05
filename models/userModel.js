const mongoose = require('mongoose')


// Building mongoose schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Please type your name']
    }

})