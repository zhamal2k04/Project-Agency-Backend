import { Router } from "express";
import { login_post, signup_post } from "../controllers/authController.mjs";

const router = Router();

router.post("/signup", signup_post);
router.post("/login", login_post);

export default router;
