const userRouter = require('express').Router()
const express = require('express')
const userModel=require('../Schema/userSchema.js')


userRouter.get('/user/' , async(req , res)=>{
  const result=await userModel.find({});
  res.json(result)

})



userRouter.put('/user/delete/:id' , async(req , res)=>{
    let {id}=req.params;
    console.log(id)
    await userModel.findByIdAndDelete(id)
    const result=await userModel.findById(id)
    res.status(200).json({result});
  
})

userRouter.put('/user/update/:id' , async(req , res)=>{

    let {id}=req.params;
    console.log(id)
    await userModel.findByIdAndUpdate(id,req.body)
    const result=await userModel.findById(id)
    res.status(200).json({result});
})




userRouter.post('/user/register' , async(req , res)=>{

// console.log(x.body)
    await userModel.create(req.body);
    const result=await userModel.find({})
    res.status(200).json({result});
})


userRouter.post('/user/login' , (req , res)=>{
    // router code here
})
module.exports  = userRouter