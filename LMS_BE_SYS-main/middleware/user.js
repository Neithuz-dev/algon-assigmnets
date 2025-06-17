const jwt= require("jsonwebtoken");
const {JWT_USER_PASSWORD}=require("../config");

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD); //true or false

    if(decoded){
        req.userId = decoded.Id;
        next();
    }
    else{
        res.json({"error":{"code":"BAD_REQUEST_ERROR","description":"The url field is required.","source":"internal","step":"payment_initiation","reason":"input_validation_failed","metadata":{},"field":"url"}})
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}