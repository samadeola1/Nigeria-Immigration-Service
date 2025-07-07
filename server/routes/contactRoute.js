import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

// Create a new contact message
router.post("/create", createContact);

// Get all contact messages
router.get("/get", getContacts);

export default router;