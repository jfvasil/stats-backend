const mongoose = require('mongoose')

const calcModel = new mongoose.Schema({
    userID: {
        type: String, 
        required: true
    }, 
    inputs: {
        type: Array, 
        required: true
    }, 
    results: {
        type: Array, 
        required: true
    },
    chart: {
        type: Image, 
        required: true
    }, 
    date: {
        type: Date, 
        required: true
    }
})

module.exports = mongoose.model('Data', calcModel)