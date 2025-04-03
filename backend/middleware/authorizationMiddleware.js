const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) { // req.headers.authorization "Authorziation: Bearer a.b.c"
        try {
            token = req.headers.authorization.split(" ")[1]; // 0 - Bearer 1 - a.b.c; a = JWT Header, b = payload, c = signature

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // (a.b + JWT_SECRET) -> k; If(k == c) then return b

            req.user = await User.findById(decodedToken.id).select("-password"); 

            next();
        } catch(error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized");
        }
    }

    if(!token){
        res.status(401);
        throw new Error("Bearer Token Not Found");
    }
});

module.exports = { 
    protect 
};
