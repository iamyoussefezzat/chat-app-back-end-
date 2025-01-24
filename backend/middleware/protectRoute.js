import  jwt  from "jsonwebtoken";

import User from "../models/model.js";

const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error:"NO Token Provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Invalid Token"})
        }
        const user= await User.findById(decoded.userId).select("-password")
        if (!user) {
            return res.status(400).json({error:"Username already exists"});
        }
        req.user= user

        next()
    }
    catch(error){
        console.log("error in protectRouter middleware ", error.message )
        res.status(500).json({error:"server error"})
       }
}

export default protectRoute;