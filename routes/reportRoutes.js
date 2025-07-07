const express = require("express");
const router = express.Router();
const Report = require("../models/Report"); // your model
const { protect } = require("../middleware/authMiddleware"); //Auth MiddleWare
// POST: Submit a new report
router.post("/", protect, async (req, res) => {
  try {
    const { title, description, location, imageUrl } = req.body;

    const newReport = new Report({
      title,
      description,
      location,
      imageUrl,
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "❌ Something went wrong while saving the report" });
  }
});

// GET: Fetch all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find().populate("User", "name email");
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: "❌ Failed to fetch reports" });
  }
});

module.exports = router;
