import express from "express";
import multer from "multer";
import { protectRoute } from "../../Middleware/auth.middleware.js";
import { createGroupChat, getGroupChats } from "./Groupchat.controller.js";


const router = express.Router();

router.post("/create-group", protectRoute, createGroupChat);
router.get("/allgroup", getGroupChats);

export default router;