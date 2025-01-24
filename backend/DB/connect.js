import mongoose from "mongoose";

    const connectDB = async () =>{
        try{
            await mongoose.connect(process.env.MONGO_DB_URL ,)
            console.log("connected to DB")
        }
        catch(error){
            console.log ("error connect to DB" , error.message)
        }
    }

    export default connectDB;