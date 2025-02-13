import React from 'react'
// import "./Home.css"

const Contact = () => {
  return (
    <div>    
        <div className='head'>
            <h1><center>Get in Touch</center></h1>
        </div>
        <div className='head'>
            <h2>Drop Us a Line</h2>
            <p>Feel free to connect with us through our online channels for updates, news and more.</p>
            <form action="#" method="post">
            <label for="Full Name">Full Name</label>
            <input type="text" name="Full Name" placeholder="Name" ></input>
            <label for="Email">Email Address</label>
            <input type="email" name="Email" placeholder="Email"></input><br/><br/>
            <label for="phone">Phone Number</label>
            <input type="tel" name="phone" placeholder="Number"></input>
            </form>
        </div>
    </div>
  )
}

export default Contact
