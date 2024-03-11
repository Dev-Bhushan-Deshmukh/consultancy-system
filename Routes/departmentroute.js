const departmentRouter = require('express').Router()
const departmentModel=require('../Schema/departmentSchema.js')

departmentRouter.get('/department/' , async(req , res)=>{
   const result=await departmentModel.find({});
   res.json(result);
})
departmentRouter.post('/department/new' ,async (req , res)=>{
    await departmentModel.create(req.body);
    const result=await departmentModel.find({});
    res.json(result);
})

departmentRouter.delete('/department/delete/:id' ,async(req , res)=>{
   const {id}=req.params;
    await departmentModel.findByIdAndDelete(id);
    const result=await departmentModel.find({});
    res.json(result);
})
departmentRouter.put('/department/update/:id' ,async(req , res)=>{
    const {id}=req.params;
    await departmentModel.findByIdAndUpdate(id,req.body);
    const result=await departmentModel.find({});
    res.json(result);
})


module.exports  = departmentRouter