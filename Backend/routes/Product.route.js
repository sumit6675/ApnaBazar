const express = require("express");
const ProductRoute = express.Router();
const { ProductModule } = require("../models/Product.model");

ProductRoute.get("/", async (req, res) => {
  let data = await ProductModule.find({}).sort({ discount: "asc" });
  res.send(data);
});

ProductRoute.get("/phone", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand } = req.query;
  try {
    if (brand === "Redmi") {
      let data = await ProductModule.find({
        Name: { $regex: /.*Redmi.*/i },
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "OnePlus") {
      let data = await ProductModule.find({
        Name: { $regex: /.*OnePlus.*/i },
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "Samsung") {
      let data = await ProductModule.find({
        Name: { $regex: /.*Samsung.*/i },
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "Xiaomi") {
      let data = await ProductModule.find({
        Name: { $regex: /.*Xiaomi.*/i },
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "IPhone") {
      let data = await ProductModule.find({
        Name: { $regex: /.*IPhone.*/i },
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "All") {
      let data = await ProductModule.find({ category: "Phone" })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (e) {}
});

ProductRoute.get("/laptop", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand } = req.query;
  try {
    if (brand === "Dell") {
      let data = await ProductModule.find({
        Name: { $regex: /.*Dell.*/i },
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "MacBook") {
      let data = await ProductModule.find({
        Name: { $regex: /.*MacBook.*/i },
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "HP") {
      let data = await ProductModule.find({
        Name: { $regex: /.*HP.*/i },
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "ASUS") {
      let data = await ProductModule.find({
        Name: { $regex: /.*ASUS.*/i },
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "Lenovo") {
      let data = await ProductModule.find({
        Name: { $regex: /.*Lenovo.*/i },
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (brand === "All") {
      let data = await ProductModule.find({ category: "Laptop" })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (e) {}
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

// ProductRoute.patch("/update",async(req,res)=>{
//    let data=await ProductModule.find()
//    for(let i=0;i<data.length;i++){
//     let str=data[i].discount
//     if(str){
//       let str2=str.split("%")[0]
//       console.log(+str2.split("(")[1])
//       ProductModule.findByIdAndUpdate(data[i]._id,{discount:+str2.split("(")[1]},(err,docs)=>{
//         if(err){
//           console.log('err', err)
//         }else{
//           console.log('ok')
//         }
//       })
//     }
//    }
// })

module.exports = {
  ProductRoute,
};
