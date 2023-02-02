require("dotenv").config();
const PORT = process.env.port;
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { usersRoute } = require("./routes/user.routes");
const { authenticate } = require("./middlewere/Authentication.middlewere");
const { ProductRoute } = require("./routes/Product.route");

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

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Coonected to the database");
  } catch (err) {
    console.log("err", err);
  }
  console.log(`Server is live at PORT : ${PORT}`);
});
