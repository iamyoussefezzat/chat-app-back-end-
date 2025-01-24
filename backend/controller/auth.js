import User from "../models/model.js";
import bcryt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const Signup =async (req,res)=>{
   try{

        const {fullName,username,password,confirmPasseord,gender}=req.body;

        if(password !== confirmPasseord){
            return res.status(400).json({error:"pass don't match"});
        }
            const user= await User.findOne({username});
            if (user) {
                return res.status(400).json({error:"Username already exists"});
            }
            
            const salt= await bcryt.genSalt(10)
            const hashPassword= await bcryt.hash(password, salt)

            const boyprofilepic= `https://avatar.iran.liara.run/public/boy?username=${username}`;

            const girlprofilepic= `https://avatar.iran.liara.run/public/girl?username=${username}`;

                const newUser= new User({
                    fullName,
                    username,
                    password: hashPassword,
                    confirmPasseord,
                    gender,
                    profilepic: gender === "male" ? boyprofilepic : girlprofilepic
                });

                if(newUser){
                     generateTokenAndSetCookie(newUser._id, res);
                    await newUser.save();

                    res.status(201).json ({
                          message:("user added")
                    });
    
                }else{
                    res.status(400).json({error:"Invalid user data"})
                }
             
   }catch(error){
    console.log("error in signup controller ", error.message )
    res.status(500).json({error:"server error"})
   }
};
  
export const login = async(req,res)=>{
   try{
    const {username,password}=req.body;

    const user =await User.findOne({username})
    const ispasswordcorrect = await bcryt.compare(password, user?.password || "");

        if(!user || !ispasswordcorrect){
            return res.status(400).json({error:"invaild username or password"})
        }

        generateTokenAndSetCookie (user._id, res)

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilepic:user.profilepic
        });
   }
   catch(error){
    console.log("error in login controller ", error.message )
    res.status(500).json({error:"server error"})
   }
}
  
export const Logout = (req,res)=>{

        try{
            res.cookie("jwt", "",{maxAge:0});
            res.status(200).json({message:"logged out"})

        }
        catch(error){
            console.log("error in Logout controller ", error.message )
            res.status(500).json({error:"server error"})
           }
}

  