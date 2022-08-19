const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("category", catSchema);
