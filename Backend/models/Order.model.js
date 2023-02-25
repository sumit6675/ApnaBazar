const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  Name: String,
  cardMonthYear: String,
  cardNumber: String,
  category: String,
  cvv: String,
  discount: String,
  image: String,
  mrp: String,
  nameOnCard: String,
  payBy: String,
  price: String,
  qty: String,
  rating: String,
  upiId: String,
  orderStatus: String,
  orderBook: Boolean,
  orderProcessing: Boolean,
  dispatch: Boolean,
  outForDelivery: Boolean,
  Deliverd: Boolean,
  address: String,
  city: String,
  state: String,
  pin: String,
  date: String,
  UserId:String,
  UserEmail:String,
  DeliveryBoyName:String
});

const OrderModel = mongoose.model("order", orderSchema);
module.exports = {
    OrderModel,
};