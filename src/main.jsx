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
import User from './Components/Userprofile.jsx';
import Cars from './Pages/Cars.jsx';
import Booking from './Components/Booking.jsx';
import Creta from './Pages/Creta.jsx';
import Scorpio from './Pages/Scorpio.jsx';
import Harrier from './Pages/Harrier.jsx';
import Alto from './Pages/Alto.jsx';
import Virtus from './Pages/Virtus.jsx';
import Verna from './Pages/Verna.jsx';
import Brezza from './Pages/Brezza.jsx';
import Polo from './Pages/Polo.jsx';
import Ertiga from './Pages/Ertiga.jsx';
import Vitara from './Pages/Vitara.jsx';
import Nexon from './Pages/Nexon.jsx';
import Thar from './Pages/Thar.jsx';
import Review from './Pages/Review.jsx';

// const GoogleWrapper = () => {
//   return(
//     <GoogleOAuthProvider clientId="371112211861-lb7qs932qqpuf7mf759rvp9oc5spf6f4.apps.googleusercontent.com">
//     <Login />
//   </GoogleOAuthProvider>
//   )
 
// }

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
    {/* <Route path="/" element={<GoogleWrapper/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />  
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
      <Route path="/forgot" element={<Forgotpassword/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/book" element={<Booking/>} />
      <Route path="/cars/creta" element={<Creta/>} />
      <Route path="/cars/scorpio" element={<Scorpio/>} />
      <Route path="/cars/harrier" element={<Harrier/>} />
      <Route path="/cars/alto" element={<Alto/>} />
      <Route path="/cars/virtus" element={<Virtus />} />
      <Route path="/cars/verna" element={<Verna />} />
      <Route path="/cars/brezza" element={<Brezza />} />
      <Route path="/cars/polo" element={<Polo />} />
      <Route path="/cars/ertiga" element={<Ertiga />} />
      <Route path="/cars/vitara" element={<Vitara />} />
      <Route path="/cars/nexon" element={<Nexon />} />
      <Route path="/cars/thar" element={<Thar />} />
      <Route path="/sidebar/review" element={<Review />} />
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  </div>
)