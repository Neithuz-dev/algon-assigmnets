// const express=require('express');
// const adminRoutes=express.Router();




// module.exports = {
//     adminRoutes: adminRoutes
// }



const {Router} = require("express");

const {adminModel, courseModel} = require('../db');

const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

const {adminMiddleware} = require('../middleware/admin');
const { appendFile } = require("fs");




const adminRouter = Router();





adminRoutes.use(adminMiddleware);








adminRoutes.post("/purchase",function(req,res){
    res.json({
        message: "to purchase a course"
    })
})


adminRoutes.get("/",(req,res)=>{
    res.json({
        message:"get course"
    })
})


adminRoutes.post("/signup",async function(req,res){
    const {email, password, firstName, lastName} =req.body;

    await adminModel.create({
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName
    })


    //FE LOGIC
    res.json({
        message: " you have created an account for yourself"
    })

})







adminRoutes.post("/signin",async function(req,res){
    const {email, password} =req.body;

    const admin = await adminModel.findOne({
        email: email, password: password
    }); //true or false  


    if(admin){

        //FE LOGIC
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }

    else{
        res.json({
            message: "you have entered invalid credential"
        })
    }


    res.json({
        message: " you have created an account for yourself"
    })

})