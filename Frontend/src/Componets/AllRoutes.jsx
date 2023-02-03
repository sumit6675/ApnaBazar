import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Productpage from "../Pages/Products";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mobile" element={<Productpage category={"phone"}/>} />
        <Route path="/laptop" element={<Productpage category={"laptop"}/>} />
        <Route path="/menfashion" element={<Productpage category={"men"}/>} />
        <Route path="/womenfashion" element={<Productpage category={"women"}/>} />
        <Route path="/homeApplinces" element={<Productpage category={"home"}/>} />
      </Routes>
    </div>
  );
};
