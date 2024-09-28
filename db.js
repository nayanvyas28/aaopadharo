const mongoose = require("mongoose")

var mongoURL = 'mongodb+srv://navneetparate7:MokePeChoka76@cluster0.cjkag.mongodb.net/aaopadharo'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log("Mongo DB Connection failed")
})

connection.on('connected', ()=>{
    console.log("Mongo DB Connection Successful")
})


module.exports = mongoose