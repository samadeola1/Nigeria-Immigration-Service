import express from "express";
import { subscribe, getSubscribers } from "../controllers/subscriberController.js";

const router = express.Router();

// Route to create a new subscriber
router.post("/create-subscriber", subscribe);

// Route to get all subscribers
router.get("/get-all", getSubscribers);

export default router;