const consultantRouter = require('express').Router()
const consultantmodel =require('../Schema/consultantSchema.js')


consultantRouter.get('/consultant/' , async(req , res)=>{
    const result=await consultantmodel.find({})
    res.json({result})
})

consultantRouter.post('/consultant/new' ,async (req , res)=>{


await consultantmodel.create(req.body)
const result=await consultantmodel.find({});
res.json({result})



})


consultantRouter.delete('/consultant/delete/:id' ,async (req , res)=>{
    let {id}=req.params;
    console.log(id)
    await consultantmodel.findByIdAndDelete(id)
    const result=await consultantmodel.findById(id)
    res.status(200).json({result});
})



consultantRouter.put('/consultant/update/:id' , async(req , res)=>{
    let {id}=req.params;
    console.log(id)
    await consultantmodel.findByIdAndUpdate(id,req.body)
    const result=await consultantmodel.findById(id)
    res.status(200).json({result});
})



consultantRouter.get('/consultant/profile/:id' , async(req , res)=>{
    let {id}=req.params;
    console.log(id)
   const result=await consultantmodel.findById(id)
   res.status(200).json({result});
})



consultantRouter.get('consultant/history/:id' , (req , res)=>{
    
})
consultantRouter.post('consultant/confirmbooking' , (req , res)=>{
    // router code here
})
consultantRouter.post('consultant/rejectbooking' , (req , res)=>{
    // router code here
})


module.exports  = consultantRouter