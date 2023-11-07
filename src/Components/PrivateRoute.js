import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const { user } = useSelector((state) => ({ ...state.auth }));
  const user = JSON.parse(localStorage.getItem("profile"));
  let logIn = user;
  // console.log("8 private", logIn);
  return logIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;