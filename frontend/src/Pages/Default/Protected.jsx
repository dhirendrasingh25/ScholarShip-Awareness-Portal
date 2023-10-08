import React from "react";
import { Navigate } from "react-router-dom";


const Protected = ({ children }) => {
  const user = sessionStorage.userId
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default Protected;