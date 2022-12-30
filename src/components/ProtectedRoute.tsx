import React, { Component } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }:any) => {

    return (
        
     props.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace/>
  )}
  
  export default ProtectedRoute;