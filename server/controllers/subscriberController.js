import SUBSCRIBER from "../models/subscriberModel.js";

// Subscribe a new user
export const subscribe = async (req, res) => {
  const { email, name } = req.body;
  try {
    // Check if already subscribed
    const existing = await SUBSCRIBER.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already subscribed" });
    }
    const subscriber = await SUBSCRIBER.create({ email, name });
    res.status(201).json({ success: true, message: "Subscribed successfully", subscriber });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all subscribers
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await SUBSCRIBER.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, subscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};