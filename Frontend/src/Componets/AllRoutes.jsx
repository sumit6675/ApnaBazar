import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Productpage from "../Pages/Products";
import Signup from "../Pages/Signup";
import SingleProduct from "../Pages/SingleProductPage";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone" element={<Productpage category={"phone"} />} />
        <Route
          path="/phone/:id"
          element={<SingleProduct category={"phone"} />}
        />
        <Route path="/laptop" element={<Productpage category={"laptop"} />} />
        <Route
          path="/laptop/:id"
          element={<SingleProduct category={"laptop"} />}
        />
        <Route path="/men" element={<Productpage category={"men"} />} />
        <Route path="/men/:id" element={<SingleProduct category={"men"} />} />
        <Route path="/women" element={<Productpage category={"women"} />} />
        <Route
          path="/women/:id"
          element={<SingleProduct category={"women"} />}
        />
        <Route path="/home" element={<Productpage category={"home"} />} />
        <Route path="/home/:id" element={<SingleProduct category={"home"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
