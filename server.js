const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express(); // initialize express
const PORT = process.env.PORT || 5000; // default to port 5000

app.use(express.json()); // parse JSON

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//Report Routes

const reportRoutes = require("./routes/reportRoutes");
app.use("/api/reports", reportRoutes);

//Using User Routes

const userRoutes = require("./routes/userRoutes");
app.use("/api/reports", reportRoutes);
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🌱 Welcome to Cleanify API");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
