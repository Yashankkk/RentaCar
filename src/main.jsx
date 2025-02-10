import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
// import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="login" element={<Login/>} />
  <Route path="home" element={<Home/>} />  
  </Routes>
</BrowserRouter>

)