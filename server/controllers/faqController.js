import FAQ from "../models/faqModel.js";

// Create a new FAQ
export const createFaq = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const faq = await FAQ.create({ question, answer });
    res.status(201).json({ success: true, message: "FAQ created successfully", faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all FAQs
export const getFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, faqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};