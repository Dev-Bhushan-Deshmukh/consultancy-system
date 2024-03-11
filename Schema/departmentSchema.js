const mongoose =require('mongoose');

const departmentSchema=mongoose.Schema({
departmentName:{

    type:String,
    required:true,
    unique:true

    
},

created:{
type:String,
required:true

},


consultantNo:{
type:Number,
required:true
},
description:{
    type:String,
    required:true
    },






})


const departmentModel=mongoose.model('department',departmentSchema);


module.exports=departmentModel;
