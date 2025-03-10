import express from "express";
import multer from "multer";
import {
  signup,
  login,
  logout,
  getUserList,
  currentUser,
  updateProfile,
  updateUser,

} from "./User.controler.js";
import { authenticateUser } from "../../Middleware/auth.middleware.js";
const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/signup", signup);
router.get("/alluser", getUserList);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", authenticateUser, currentUser);
router.patch("/update_user", authenticateUser, updateUser);
router.patch(
  "/update-profile",
  authenticateUser,
  upload.single("profilePic"),
  updateProfile
);



export default router;
