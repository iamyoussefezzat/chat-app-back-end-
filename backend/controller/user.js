import User from "../models/model.js"

export const getUsersForSidbar = async(req,res)=>{
    try{
        const loggedInUserId=req.user._id

        const filteredUsers = await User.find({_id:{$ne:loggedInUserId }}).select("-password")

        return res.status(200).json(filteredUsers)
        

    }
    catch(error){
    console.log("error in grtUsersForSidbar controller ", error.message )
    res.status(500).json({error:"server error"})
   }
}