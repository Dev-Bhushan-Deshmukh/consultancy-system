const appointmentRouter = require('express').Router()
const appointmentModel =require('../Schema/appointmentSchema.js')




appointmentRouter.get('/appointment/' , async(req , res)=>{
    const result=await appointmentModel.find({});
    res.json({result})
    

})
appointmentRouter.get('/appointment/new' , async(req , res)=>{
    await appointmentModel.create(req.body);
    const result= await appointmentModel.find({})
    res.json({result});

})

appointmentRouter.get('/appointment/consultant/:name' ,async (req , res)=>{
    const {name}=req.params;
    console.log(name)
    const result= await appointmentModel.find({consultantName:name})
    res.json({result});

})
appointmentRouter.get('/appointment/user/:name' ,async (req , res)=>{
    const {name}=req.params;
    console.log(name)
    const result= await appointmentModel.find({clientName:name})
    res.json({result});

})
appointmentRouter.put('/appointment/delete/:id' , async(req , res)=>{



    let {id}=req.params;
    console.log(id)
    await appointmentModel.findByIdAndDelete(id)
    const result=await appointmentModel.find({})
    res.status(200).json({result});
   
})



module.exports  = appointmentRouter