const mongoose = require('mongoose')

const AdminSchema= new mongoose.Schema({
    adminemail: String,
    adminpassword: String
})

const AdminModel = mongoose.model("admin", AdminSchema)
module.exports = AdminModel