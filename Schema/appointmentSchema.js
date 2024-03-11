const mongoose =require('mongoose');

const appointmentSchema=mongoose.Schema({
departmentName:{

    type:String,
    required:true,
 

    
},
consultantName:{

    type:String,
    required:true,


    
},
clientName:{

    type:String,
    required:true,


    
},
created:{
type:Date,
required:true

},


shift:{
type:String,
required:true
},
status:{
    type:String,
    required:true
    },
    note:{
        type:String,
        
        }






})


const appointmentModel=mongoose.model('appointments',appointmentSchema);


module.exports=appointmentModel;
