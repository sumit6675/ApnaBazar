require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { usersRoute } = require("./routes/user.routes");
const { authenticate } = require("./middlewere/Authentication.middlewere");
const { ProductRoute } = require("./routes/Product.route");
const { OrderRoute } = require("./routes/Order.route");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Apna Bazar");
});

app.use("/users", usersRoute);

// app.use(authenticate);

app.use("/products",ProductRoute)
app.use("/orders",OrderRoute)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Coonected to the database");
  } catch (err) {
    console.log("err", err);
  }
  console.log(`Server is live at PORT : 8080`);
});
