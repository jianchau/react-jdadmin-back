const mongoose =require('mongoose')
const DB_URL = "mongodb://localhost:27017/jdadmin"
mongoose.connect(DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true })
mongoose.connection.on('connected',()=>{
    console.log('db connected sucessfully')
})
mongoose.connection.on('disconnected',()=>{
    console.log('db disconnected already')
})
mongoose.connection.on('error',()=>{
    console.log('db connectionError encountered')
})
module.exports = mongoose


