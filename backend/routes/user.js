import  express from "express";
import { getUsersForSidbar } from "../controller/user.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/",protectRoute, getUsersForSidbar)

export default router;