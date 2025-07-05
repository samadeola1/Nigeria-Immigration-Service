import express from "express";
import { createExcelDownload, getExcelDownloads } from "../controllers/excelDownloadController.js";

const router = express.Router();

// Record a new Excel download
router.post("/create", createExcelDownload);

// Get all Excel download records
router.get("/get", getExcelDownloads);

export default router;