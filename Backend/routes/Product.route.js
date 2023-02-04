const express = require("express");
const ProductRoute = express.Router();
const { ProductModule } = require("../models/Product.model");

ProductRoute.get("/", async (req, res) => {
  let data = await ProductModule.find({
    discount: { $regex: /.*% OFF.*/i },
  }).sort({ discount: -1 });
  res.send(data);
});

ProductRoute.get("/phone", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, discount } = req.query;
  try {
    if (brand !== "All") {
      let data = await ProductModule.find({ category: "Phone"})
      let filteredData = data.filter((i) =>
        i.Name.toLowerCase().includes(brand.toLowerCase())
      );
      res.send(filteredData);
    } else if (brand === "All") {
      if(discount==="lowToHigh"){
        let data = await ProductModule.find({ category: "Phone", discount: { $regex: /.*% OFF.*/i } })
        .sort({ discount: "asc" })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
      }else if(discount==="highToLow"){
        let data = await ProductModule.find({ category: "Phone", discount: { $regex: /.*% OFF.*/i } })
        .sort({ discount: "desc" })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
      }else{
        let data = await ProductModule.find({ category: "Phone" })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
      }
    }
  } catch (e) {}
});
ProductRoute.get("/laptop", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  let data = await ProductModule.find({ category: "Laptop" })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.send(data);
});
ProductRoute.get("/women", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  let data = await ProductModule.find({ category: "Women Clothing" })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.send(data);
});
ProductRoute.get("/men", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  let data = await ProductModule.find({ category: "Men Clothing" })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.send(data);
});
ProductRoute.get("/home", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  let data = await ProductModule.find({ category: "Home Appliances" })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.send(data);
});

module.exports = {
  ProductRoute,
};
