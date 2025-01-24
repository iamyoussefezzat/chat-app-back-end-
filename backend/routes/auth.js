import express  from "express";

import { login, Logout, Signup } from "../controller/auth.js";

    const router = express.Router();

    router.post("/Signup", Signup)


    router.post("/login", login)

    
    router.post("/Logout",Logout)

    export default router