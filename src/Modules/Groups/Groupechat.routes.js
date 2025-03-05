import express from "express";
import { protectRoute } from "../../Middleware/auth.middleware.js";
import { createGroupChat, getGroupChats } from "./Groupchat.controller.js";


const router = express.Router();

router.post("/create-group", protectRoute, createGroupChat);
router.get("/allgroup", protectRoute, getGroupChats);

export default router;