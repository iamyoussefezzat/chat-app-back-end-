process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
import cookieParser from "cookie-parser";
import express  from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/user.js";

import connectDB from "./DB/connect.js";


const app = express();
const PORT=process.env.PORT || 5050;

        dotenv.config();
        app.use(express.json());
        app.use(cookieParser());

                        app.use("/api/auth" ,authRoutes);
                        app.use("/api/message" ,messageRoutes);
                        app.use("/api/users" ,userRoutes);


        // app.get("/", (req,res)=>{

        //     res.send("Hello");
    
        // });

app.listen(PORT,() =>
{
      connectDB();
    console.log(`server running on ${PORT}`)
});




 
