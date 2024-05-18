const mongoose = require('mongoose')

const ReserveSchema= new mongoose.Schema({
    name: String,
    pid: Number,
    did: Number,
    mobileno: Number,
    testname: String,
    date: String,
    time: String
})

const ReserveModel = mongoose.model("reserve", ReserveSchema)
module.exports = ReserveModel