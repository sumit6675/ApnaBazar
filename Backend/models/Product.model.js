const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  image: String,
  Name: String,
  reviewNumber: String,
  mrp: String,
  price: String,
  discount: Number,
  selection6: [
    {
      name: String,
    },
  ],
  selection2: String,
  category: String,
  rating: Number,
  TotalQtyAvailable: { type: Number, default: 20 },
});

const ProductModule = mongoose.model("product", ProductSchema);
module.exports = {
  ProductModule,
};
