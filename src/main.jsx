// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx';
// import Header from './Components/Header.jsx';
// import Footer from './Components/Footer.jsx';
import Registration from './Pages/Registration.jsx';
import Sidebar from './Pages/Sidebar.jsx';
import Forgotpassword from './Pages/Forgotpassword.jsx';
// import GoogleLogin from './Pages/Googlelogin.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './Pages/Dashboard.jsx';
import User from './Components/User.jsx';
import Cars from './Pages/Cars.jsx';
import Booking from './Pages/Booking.jsx';

const GoogleWrapper = () => {
  return(
    <GoogleOAuthProvider clientId="371112211861-lb7qs932qqpuf7mf759rvp9oc5spf6f4.apps.googleusercontent.com">
    <Login />
  </GoogleOAuthProvider>
  )
 
}

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
    <Route path="/" element={<GoogleWrapper/>} />
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/home" element={<Home/>} />  
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
      <Route path="/forgot" element={<Forgotpassword/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/book" element={<Booking/>} />
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  </div>
)