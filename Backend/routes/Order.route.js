const express = require("express");
const OrderRoute = express.Router();
const { OrderModel } = require("../models/Order.model");
const { RegisterModule } = require("../models/user.model");
const moment = require('moment');
OrderRoute.get("/", async (req, res) => {
  let data = await OrderModel.find();
  res.send(data);
});

OrderRoute.post("/addOrder", async (req, res) => {
  const payload = req.body;
  for (let i = 0; i < payload.length; i++) {
    delete payload[i]._id;
  }
  let { email } = req.query;
  try {
    await OrderModel.insertMany(payload)
      .then(async () => {
        let data = await RegisterModule.findOne({ email: email });
        data.cart = [];
        data.save();
        res.status(201).json({ message: "Data saved successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          message: "Something went wrong",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/getOrder", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({ UserEmail: email })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/all/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/all/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({ UserEmail: email })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/Processing", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({ orderStatus: "Processing" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/Processing/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({
      orderStatus: "Processing",
      UserEmail: email,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.patch("/admin/Processing/dispatchorder/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "dispatch",
      dispatch: "true",
    });
    res.send({ message: "Order Dispatch Success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/dispatch", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({ orderStatus: "dispatch" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/dispatch/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({
      orderStatus: "dispatch",
      UserEmail: email,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.patch("/admin/dispatch/outForDelivery/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "outForDelivery",
      outForDelivery: "true",
    });
    res.send({ message: "Order outForDelivery Success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/outForDelivery", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({ orderStatus: "outForDelivery" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/outForDelivery/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({
      orderStatus: "outForDelivery",
      UserEmail: email,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.patch("/admin/outForDelivery/deliverd/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "Deliverd",
      Deliverd: "true",
    });
    res.send({ message: "Order Deliverd Success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/deliverd", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({ orderStatus: "Deliverd" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/deliverd/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({
      orderStatus: "Deliverd",
      UserEmail: email,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/Cancelled", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({ orderStatus: "Cancelled" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/Cancelled/getOrders", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { email } = req.query;
  try {
    let data = await OrderModel.find({
      orderStatus: "Cancelled",
      UserEmail: email,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/todaySales",async(req,res)=>{
  let { todayDate } = req.query;
  try {
    let data = await OrderModel.find({ date: todayDate })
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
})

OrderRoute.get("/admin/LastWeekStats",async(req,res)=>{
  const lastWeekDate = moment().subtract(1, 'weeks').format('DD-MM-YYYY');
  const lastWeekDateParts = lastWeekDate.split('-');
  try{
      let data=await OrderModel.find()
      const filteredData = data.filter((item) => {
        const dateParts = item.date.split('-');
        const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
        const compareDate = new Date(+lastWeekDateParts[2], +lastWeekDateParts[1]-1, +lastWeekDateParts[0]); // year, month (0-based), day
        return itemDate > compareDate;
      });
      res.send(filteredData);
  }catch(err){
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
})
module.exports = {
  OrderRoute,
};
