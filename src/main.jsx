// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Registration from './Pages/Registration.jsx';
import Sidebar from './Pages/Sidebar.jsx';
import GoogleLogin from './Pages/Googlelogin.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleWrapper = () => {
  return(
    <GoogleOAuthProvider clientID="91414257084-ddh4oq3bfuhuf2vbrhqr3bnm7ak2eh7g.apps.googleusercontent.com ">
    <GoogleLogin />
  </GoogleOAuthProvider>
  )
 
}

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<GoogleWrapper/>} />

      <Route path="/app" element={<App />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />  
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>
)