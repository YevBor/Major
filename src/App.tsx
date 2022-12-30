import './App.css';
import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Main from "./components/Main";
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';


function App() {
  const [loggedIn, useLoggedIn] = useState(false);

  return (
  <div>

    <Routes>     
      <Route path="/" element={loggedIn ? <Navigate to="/Major" replace/>:<Navigate to="/login" replace />} />
      <Route path="login" element={<LoginForm/>}  />
      <Route path="register" element={<RegisterForm/>}  />

      <Route path="profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn}/>} />
    </Routes>
  </div>
  )
}

export default App;
