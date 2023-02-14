import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import { LastPage } from "../Pages/FinalPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import NotFound from "../Pages/PageNotFound";
import Productpage from "../Pages/Products";
import ProfilePage from "../Pages/ProfilePage";
import Signup from "../Pages/Signup";
import SingleProduct from "../Pages/SingleProductPage";
import PrivateRoute from "./PrivateRoutes";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/phone"
          element={
            <PrivateRoute>
              <Productpage category={"phone"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/phone/:id"
          element={
            <PrivateRoute>
              <SingleProduct category={"phone"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/laptop"
          element={
            <PrivateRoute>
              <Productpage category={"laptop"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/laptop/:id"
          element={
            <PrivateRoute>
              <SingleProduct category={"laptop"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/men"
          element={
            <PrivateRoute>
              <Productpage category={"men"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/men/:id"
          element={
            <PrivateRoute>
              <SingleProduct category={"men"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/women"
          element={
            <PrivateRoute>
              <Productpage category={"women"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/women/:id"
          element={
            <PrivateRoute>
              <SingleProduct category={"women"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Productpage category={"home"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/home/:id"
          element={
            <PrivateRoute>
              <SingleProduct category={"home"} />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/finalPage"
          element={
            <PrivateRoute>
              <LastPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
