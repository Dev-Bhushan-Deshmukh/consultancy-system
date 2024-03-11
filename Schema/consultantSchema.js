const mongoose =require('mongoose');

const consultantSchema=mongoose.Schema({
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
age:{

    type:Number
},
yearsExperience:{
 type:Number,
 required:true   


},
qualification:{
    type:String,
    required:true
    
    
    },
about:{


type:String,
required:true

},


location:{
type:String,
required:true


},


joinDate:{
type:Date,
required:true

},

department:{
type:String,
required:true

},
noOfclient:{

type:Number,
required:true


}
,
contact:{
type:Number,
required:true
},
email:{
    type:String,
    required:true
    },
    socialLink:String





})


const consultantmodel=mongoose.model('consultant',consultantSchema);


module.exports=consultantmodel;
