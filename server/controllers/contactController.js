import CONTACT from "../models/contactModel.js";

// Create a new contact message
export const createContact = async (req, res) => {
  const { name, email, message, subject } = req.body;
  try {
    const contact = await CONTACT.create({ name, email, message, subject });
    res.status(201).json({ success: true, message: "Message sent successfully", contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await CONTACT.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};