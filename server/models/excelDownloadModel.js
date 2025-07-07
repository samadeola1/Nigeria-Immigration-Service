import mongoose from "mongoose";

const excelDownloadSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  fileName: {
    type: String,
    required: [true, "File name is required"],
    trim: true,
  },
  downloadDate: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

const ExcelDownload = mongoose.model("ExcelDownload", excelDownloadSchema);
export default ExcelDownload;