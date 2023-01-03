import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const ProtectedRoute = ({ element: Component, ...props  }:any) => {
    const value = React.useContext(AppContext);

    return (
        
     value.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace/>
  )}
  
  export default ProtectedRoute;