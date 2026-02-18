const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  gender: { type: String, required: true }, // Gents, Ladies, Kids
  category: { type: String, required: true }, // Wearable, Fabric
  description: String,
  image: String,
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
