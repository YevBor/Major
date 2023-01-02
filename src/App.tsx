import './App.css';
import { BrowserRouter,Routes, Route,Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Main from "./components/Main";
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Home from './components/Home';
import { checkToken } from './components/majorAuth';


function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    username: '',
    email: ''
  })
  const navigate = useNavigate();
  useEffect(()=> {tokenCheck();}, []);

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      checkToken(jwt).then((res)=>{
        if(res){
          const userData = {
            username: res.username,
            email: res.email
          }
          setLoggedIn(true);
          setUserData(userData);
          navigate('/home',{replace:true})

        }
      })
    }

  }

  return (
  <div>

    <Routes>     
      <Route path="/" element={loggedIn ? <Navigate to="/home" replace/>:<Navigate to="/login" replace />} />
      <Route path="login" element={<LoginForm />}  />
      <Route path="register" element={<RegisterForm />}  />
      <Route path="home" element={<ProtectedRoute element={Home} loggedIn={loggedIn} />}/>
      <Route path="profile" element={<ProtectedRoute element={Profile} userData={userData} loggedIn={loggedIn}/>} />
    </Routes>
  </div>
  )
}

export default App;
