const express = require("express");
const OrderRoute = express.Router();
const { OrderModel } = require("../models/Order.model");
const { RegisterModule } = require("../models/user.model");
const moment = require("moment");
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
  const { name } = req.body;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "outForDelivery",
      outForDelivery: "true",
      DeliveryBoyName: name,
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
  const { name } = req.body;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "Deliverd",
      Deliverd: "true",
      DeliveryBoyName: name,
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

OrderRoute.get("/admin/cancelled", async (req, res) => {
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

OrderRoute.patch("/cancleOrder/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndUpdate(id, {
      orderStatus: "Cancelled",
    });
    res.send({ message: "Order Deliverd Success" });
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

OrderRoute.get("/admin/todaySales", async (req, res) => {
  let { todayDate } = req.query;
  try {
    let data = await OrderModel.find({ date: todayDate });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/LastWeekStats", async (req, res) => {
  const lastWeekDate = moment().subtract(1, "weeks").format("DD-MM-YYYY");
  const lastWeekDateParts = lastWeekDate.split("-");
  try {
    let data = await OrderModel.find();
    const filteredData = data.filter((item) => {
      const dateParts = item.date.split("-");
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
      const compareDate = new Date(
        +lastWeekDateParts[2],
        +lastWeekDateParts[1] - 1,
        +lastWeekDateParts[0]
      ); // year, month (0-based), day
      return itemDate > compareDate;
    });
    const sellsStats = {};
    for (let i = 0; i < filteredData.length; i++) {
      if (!sellsStats[filteredData[i].date]) {
        sellsStats[filteredData[i].date] = 1;
      } else {
        sellsStats[filteredData[i].date]++;
      }
    }
    const today = new Date();
    const lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const dates = [];
    for (let date = lastWeek; date <= today; date.setDate(date.getDate() + 1)) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      dates.push(`${day}-${month}-${year}`);
    }
    for (let i = 0; i < dates.length; i++) {
      if (!sellsStats[dates[i]]) {
        sellsStats[dates[i]] = 0;
      }
    }
    const sortedKeys = Object.keys(sellsStats).sort();
    const sortedObject = {};
    sortedKeys.forEach((key) => {
      sortedObject[key] = sellsStats[key];
    });
    let XaxisContains = [];
    let YaxisContains = [];
    for (let key in sortedObject) {
      XaxisContains.push(key);
      YaxisContains.push(sortedObject[key]);
    }
    res.send({ data: filteredData, XaxisContains, YaxisContains });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/LastMonthStats", async (req, res) => {
  const lastMonthDate = moment().subtract(1, "months").format("DD-MM-YYYY");
  const lastMonthDateParts = lastMonthDate.split("-");
  try {
    let data = await OrderModel.find();
    const filteredData = data.filter((item) => {
      const dateParts = item.date.split("-");
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
      const compareDate = new Date(
        +lastMonthDateParts[2],
        +lastMonthDateParts[1] - 1,
        +lastMonthDateParts[0]
      ); // year, month (0-based), day
      return itemDate > compareDate;
    });
    const sellsStats = {};
    for (let i = 0; i < filteredData.length; i++) {
      if (!sellsStats[filteredData[i].date]) {
        sellsStats[filteredData[i].date] = 1;
      } else {
        sellsStats[filteredData[i].date]++;
      }
    }
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      dates.push(`${day}-${month}-${year}`);
    }
    for (let i = 0; i < dates.length; i++) {
      if (!sellsStats[dates[i]]) {
        sellsStats[dates[i]] = 0;
      }
    }
    const sortedArray = Object.entries(sellsStats).sort(([dateA], [dateB]) => {
      const [dayA, monthA, yearA] = dateA.split("-").map(Number);
      const [dayB, monthB, yearB] = dateB.split("-").map(Number);
      const dateAObj = new Date(yearA, monthA - 1, dayA);
      const dateBObj = new Date(yearB, monthB - 1, dayB);
      return dateAObj - dateBObj;
    });
    const sortedObject = Object.fromEntries(sortedArray);
    let XaxisContains = [];
    let YaxisContains = [];
    for (let key in sortedObject) {
      XaxisContains.push(key);
      YaxisContains.push(sortedObject[key]);
    }
    res.send({ data: filteredData, XaxisContains, YaxisContains });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/LastQuarterStats", async (req, res) => {
  const lastQuarterDate = moment().subtract(3, "months").format("DD-MM-YYYY");
  const lastQuarterDateParts = lastQuarterDate.split("-");
  try {
    let data = await OrderModel.find();
    const filteredData = data.filter((item) => {
      const dateParts = item.date.split("-");
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
      const compareDate = new Date(
        +lastQuarterDateParts[2],
        +lastQuarterDateParts[1] - 1,
        +lastQuarterDateParts[0]
      ); // year, month (0-based), day
      return itemDate > compareDate;
    });
    const sellsStats = {};
    for (let i = 0; i < filteredData.length; i++) {
      if (!sellsStats[filteredData[i].date]) {
        sellsStats[filteredData[i].date] = 1;
      } else {
        sellsStats[filteredData[i].date]++;
      }
    }
    const today = new Date();
    const firstDayFourMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      1
    );
    const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const dates = [];

    for (
      let date = firstDayFourMonthsAgo;
      date <= lastDayLastMonth;
      date.setDate(date.getDate() + 1)
    ) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      dates.push(`${day}-${month}-${year}`);
    }
    for (let i = 0; i < dates.length; i++) {
      if (!sellsStats[dates[i]]) {
        sellsStats[dates[i]] = 0;
      }
    }
    const sortedArray = Object.entries(sellsStats).sort(([dateA], [dateB]) => {
      const [dayA, monthA, yearA] = dateA.split("-").map(Number);
      const [dayB, monthB, yearB] = dateB.split("-").map(Number);
      const dateAObj = new Date(yearA, monthA - 1, dayA);
      const dateBObj = new Date(yearB, monthB - 1, dayB);
      return dateAObj - dateBObj;
    });
    const sortedObject = Object.fromEntries(sortedArray);
    let XaxisContains = [];
    let YaxisContains = [];
    for (let key in sortedObject) {
      XaxisContains.push(key);
      YaxisContains.push(sortedObject[key]);
    }
    res.send({ data: filteredData, XaxisContains, YaxisContains });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/LastSixMonthsStats", async (req, res) => {
  const lastSixMonthsDate = moment().subtract(6, "months").format("DD-MM-YYYY");
  const lastSixMonthsDateParts = lastSixMonthsDate.split("-");
  try {
    let data = await OrderModel.find();
    const filteredData = data.filter((item) => {
      const dateParts = item.date.split("-");
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
      const compareDate = new Date(
        +lastSixMonthsDateParts[2],
        +lastSixMonthsDateParts[1] - 1,
        +lastSixMonthsDateParts[0]
      ); // year, month (0-based), day
      return itemDate > compareDate;
    });
    const sellsStats = {};
    for (let i = 0; i < filteredData.length; i++) {
      if (!sellsStats[filteredData[i].date]) {
        sellsStats[filteredData[i].date] = 1;
      } else {
        sellsStats[filteredData[i].date]++;
      }
    }
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);
    const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const dates = [];

    for (
      let date = sixMonthsAgo;
      date <= lastDayLastMonth;
      date.setDate(date.getDate() + 1)
    ) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      dates.push(`${day}-${month}-${year}`);
    }
    for (let i = 0; i < dates.length; i++) {
      if (!sellsStats[dates[i]]) {
        sellsStats[dates[i]] = 0;
      }
    }
    const sortedArray = Object.entries(sellsStats).sort(([dateA], [dateB]) => {
      const [dayA, monthA, yearA] = dateA.split("-").map(Number);
      const [dayB, monthB, yearB] = dateB.split("-").map(Number);
      const dateAObj = new Date(yearA, monthA - 1, dayA);
      const dateBObj = new Date(yearB, monthB - 1, dayB);
      return dateAObj - dateBObj;
    });
    const sortedObject = Object.fromEntries(sortedArray);
    let XaxisContains = [];
    let YaxisContains = [];
    for (let key in sortedObject) {
      XaxisContains.push(key);
      YaxisContains.push(sortedObject[key]);
    }
    res.send({ data: filteredData, XaxisContains, YaxisContains });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/admin/LastYearStats", async (req, res) => {
  const lastYearDate = moment().subtract(1, "years").format("DD-MM-YYYY");
  const lastYearDateParts = lastYearDate.split("-");
  try {
    let data = await OrderModel.find();
    const filteredData = data.filter((item) => {
      const dateParts = item.date.split("-");
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-based), day
      const compareDate = new Date(
        +lastYearDateParts[2],
        +lastYearDateParts[1] - 1,
        +lastYearDateParts[0]
      ); // year, month (0-based), day
      return itemDate > compareDate;
    });
    const sellsStats = {};
    for (let i = 0; i < filteredData.length; i++) {
      if (!sellsStats[filteredData[i].date]) {
        sellsStats[filteredData[i].date] = 1;
      } else {
        sellsStats[filteredData[i].date]++;
      }
    }
    const today = new Date();
    const oneYearAgo = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
    const dates = [];

    for (
      let date = oneYearAgo;
      date <= today;
      date.setDate(date.getDate() + 1)
    ) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      dates.push(`${day}-${month}-${year}`);
    }
    for (let i = 0; i < dates.length; i++) {
      if (!sellsStats[dates[i]]) {
        sellsStats[dates[i]] = 0;
      }
    }
    const sortedArray = Object.entries(sellsStats).sort(([dateA], [dateB]) => {
      const [dayA, monthA, yearA] = dateA.split("-").map(Number);
      const [dayB, monthB, yearB] = dateB.split("-").map(Number);
      const dateAObj = new Date(yearA, monthA - 1, dayA);
      const dateBObj = new Date(yearB, monthB - 1, dayB);
      return dateAObj - dateBObj;
    });
    const sortedObject = Object.fromEntries(sortedArray);
    let XaxisContains = [];
    let YaxisContains = [];
    for (let key in sortedObject) {
      XaxisContains.push(key);
      YaxisContains.push(sortedObject[key]);
    }
    res.send({ data: filteredData, XaxisContains, YaxisContains });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

OrderRoute.get("/dilivery/getByName", async (req, res) => {
  const { name } = req.query;
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({
      DeliveryBoyName: name,
      orderStatus: "outForDelivery",
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

OrderRoute.get("/diliveredProduct/getByName", async (req, res) => {
  const { name } = req.query;
  const { page = 1, limit = 10 } = req.query;
  try {
    let data = await OrderModel.find({
      DeliveryBoyName: name,
      orderStatus: "Deliverd",
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

module.exports = {
  OrderRoute,
};
