const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  cart: [],
  wishlist: [],
  address: [],
  pincode: Number,
  City: String,
  addressName: String,
  state: String,
  orders: [
    {
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
    },
  ],
});

const RegisterModule = mongoose.model("users", registerSchema);
module.exports = {
  RegisterModule,
};
