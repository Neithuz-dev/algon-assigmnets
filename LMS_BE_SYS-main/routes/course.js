const express=require('express');
const courseRoutes=express.Router();



app.post("/purchase",function(req,res){
    res.json({
        message: "to purchase a course"
    })
})


courseRoutes.get("/",(req,res)=>{
    res.json({
        message:"get course"
    })
})

module.exports = {
    courseRoutes: courseRoutes
}