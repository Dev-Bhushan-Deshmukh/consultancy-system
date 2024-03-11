const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/consultancy-system');
const db=mongoose.connection;


db.on('connected',(err)=>{if(err){console.log(err)}else{console.log('connection established')}})

db.on('open',(err)=>{if(err){console.log(err)}else{console.log('connection open')}})

db.on('close',(err)=>{if(err){console.log(err)}else{console.log('connection close')}})

db.on('disconnected',(err)=>{if(err){console.log(err)}else{console.log('connection disconnected')}})


module.exports=db