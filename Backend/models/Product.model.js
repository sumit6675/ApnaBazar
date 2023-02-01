const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  image: String,
  Name: String,
  reviewNumber: String,
  mrp: String,
  price: String,
  discount: String,
  selection6: [
    {
      name: String,
    }
  ],
  selection2:String,
  category: String,
  rating: String,
});

const ProductModule = mongoose.model("product", ProductSchema);
module.exports = {
  ProductModule,
};
