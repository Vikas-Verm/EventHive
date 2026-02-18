import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  // If upload passes, Multer adds 'req.file'
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.send({
    message: "Image uploaded",
    // We return the path so the frontend knows where to find it
    imageUrl: `/uploads/${req.file.filename}`,
  });
});

export default router;
