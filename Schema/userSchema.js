const mongoose =require('mongoose');

const userSchema=mongoose.Schema({
firstName:{

    type:String,
    required:true,


    
},
middleName:{

    type:String,
    required:true,
   

    
},

lastName:{

    type:String,
    required:true,
 

    
},


location:{
type:String,
required:true


},


joinDate:{
type:Date,
required:true

},
contact:{
type:Number,
required:true,

},
email:{
    type:String,
    required:true,
    unique:true
    },
    socialLink:String





})


const userModel=mongoose.model('uniqueUsers',userSchema);


module.exports=userModel;
