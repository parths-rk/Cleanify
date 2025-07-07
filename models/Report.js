const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  location: {
    type: String,
    required: true,
  },
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "User",
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
