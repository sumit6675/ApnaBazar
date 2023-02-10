const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const usersRoute = express.Router();
const { RegisterModule } = require("../models/user.model");

const bcrypt = require("bcrypt");

//registered data using signup page
//if email already registered then redirected to login page
const isValidPassword = (password) => {
  var lowerCaseRegex = /[a-z]/;
  var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return lowerCaseRegex.test(password) && specialCharRegex.test(password);
};
usersRoute.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    if (
      name &&
      email &&
      password &&
      phone &&
      email.includes("@") &&
      email.includes(".com") &&
      isValidPassword(password)
    ) {
      const cheak = await RegisterModule.find({ email: email });
      if (cheak.length > 0) {
        res.status(401).json({ message: "Email already register" });
      } else {
        bcrypt.hash(password, 8, async (err, hash) => {
          const user = new RegisterModule({
            name,
            email,
            password: hash,
            phone,
          });
          await user.save();
          // res.send("Registered")
          res.status(201).json({ message: "Registered", user });
        });
      }
    } else {
      res.status(401).json({
        message:
          "Please chacke the email and password. password should be at least 8 characters and having small character and special character",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

//geting users data for users admin page

usersRoute.get("/", async (req, res) => {
  const { name } = req.query;
  const { email } = req.query;
  try {
    //  let data=await RegisterModule.find()
    if (name) {
      const { page = 1, limit = 5 } = req.query;
      let data = await RegisterModule.find({ name: name })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (email) {
      const data = await RegisterModule.find({ email: email });
      res.send(data[0]);
    } else {
      const { page = 1, limit = 5 } = req.query;
      let data = await RegisterModule.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch {
    res.send("err");
  }
});

//deleting the data using id

usersRoute.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await RegisterModule.findByIdAndDelete({ _id: id });
    res.send("Deleted");
  } catch {
    res.send("err");
  }
});

//loging the data from login page

usersRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModule.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai", {
            expiresIn: "10h",
          });

          res.status(201).json({
            msg: "Login Successfull",
            token: token,
            name: user[0].name,
            email: user[0].email,
          });
        } else {
          res.status(401).json({
            message: "Wrong password",
          });
        }
      });
    } else {
      res.status(401).json({
        message: "Wrong email",
      });
    }
  } catch (err) {
    res.status(401).json({
      error,
      message: "Something went wrong",
    });
  }
});

usersRoute.patch("/cart",async(req,res)=>{
  let {email}=req.query
  let payload=req.body
  let data=await RegisterModule.findOne({email:email})
  data.cart.push(payload)
  data.save()
  res.send({"message":"Data saved successfully"})
})
usersRoute.patch("/addWishlist",async(req,res)=>{
  let {email}=req.query
  let payload=req.body
  let data=await RegisterModule.findOne({email:email})
  data.wishlist.push(payload)
  data.save()
  res.send({"message":"Data saved successfully"})
})

usersRoute.patch("/deleteCart",async(req,res)=>{
  let {email}=req.query
  let payload=req.body
  let data=await RegisterModule.findOne({email:email})
  data.cart.pull(payload)
  data.save()
  res.send({"message":"Data deleted successfully"})
})

module.exports = {
  usersRoute,
};
