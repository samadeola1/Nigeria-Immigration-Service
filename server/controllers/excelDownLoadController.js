import ExcelDownload from "../models/excelDownloadModel.js";

// Create a new Excel download record
export const createExcelDownload = async (req, res) => {
  const { userEmail, fileName } = req.body;
  try {
    const download = await ExcelDownload.create({ userEmail, fileName });
    res.status(201).json({ success: true, message: "Download recorded", download });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all Excel download records
export const getExcelDownloads = async (req, res) => {
  try {
    const downloads = await ExcelDownload.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, downloads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};