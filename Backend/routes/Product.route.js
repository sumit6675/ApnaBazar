const express=require("express")
const ProductRoute=express.Router()
const {ProductModule}=require("../models/Product.model")

ProductRoute.get("/",async(req,res)=>{
    let data=await ProductModule.find()
    res.send(data)
})

ProductRoute.get("/phone",async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    let data = await ProductModule.find({ category: "Phone" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
})
ProductRoute.get("/laptop",async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    let data = await ProductModule.find({ category: "Laptop"})
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
})
ProductRoute.get("/women",async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    let data = await ProductModule.find({ category: "Women Clothing"})
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
})
ProductRoute.get("/men",async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    let data = await ProductModule.find({ category: "Men Clothing"})
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
})

module.exports={
    ProductRoute
}