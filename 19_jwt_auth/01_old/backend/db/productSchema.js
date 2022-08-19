const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
  cname: { type: String, required: true },
  pname: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  features: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("product", proSchema);
