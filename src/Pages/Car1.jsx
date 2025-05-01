import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Scorpio from '../Pages/Scorpio.jsx';

const Car = () => {
  return (
    <div>
      <Header />
      <section
      className="h-85 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">Vehicle Fleet</h1>
    </section>

    <div>
      <Scorpio />
    </div>
    <Footer />
    </div>
  )
}

export default Car
