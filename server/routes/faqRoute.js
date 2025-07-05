import express from "express";
import { createFaq, getFaqs } from "../controllers/faqController.js";

const router = express.Router();

// Create a new FAQ
router.post("/create", createFaq);

// Get all FAQs
router.get("/get", getFaqs);


export default router;