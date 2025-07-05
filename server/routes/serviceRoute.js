import {Router} from 'express';
import express from 'express';


import { forgotPassword, isLoggedIn, resetPassword, signIn, signUp, } from "../controllers/serviceController.js";

const router = express.Router();

// sign up route

router.post("/sign-up", signUp);

// sign in route

router.post("/sign-in", signIn);

// reset password route
router.put("/reset-password/:resetToken", resetPassword);

// forgot password
router.post("/forget-password",forgotPassword);

// isLoggedIn
router.get("/isloggedin", isLoggedIn)




export default router;




