const express=require('express');
const db=require('./Schema/db/dbconfig.js');
const userRouter = require('./Routes/userroute.js');
const consultantRouter=require('./Routes/consultantroute.js');
const appointmentRouter = require('./Routes/appointmentroute.js');
const departmentRouter = require('./Routes/departmentroute.js');
const port=8000;


const app=express();
app.use(express.json())
app.use(userRouter)
app.use(consultantRouter)
app.use(appointmentRouter)
app.use(departmentRouter)


app.listen(port,()=>
{
        console.log(`App is listening to ${port}`)
})