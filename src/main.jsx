import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx';
import Header from './Pages/Header.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login/>} />
      <Route path="home" element={<Home/>} />  
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  </div>
  

)