import React from 'react'
import { Typography } from 'antd'
// import "./Home.css"

const Contact = () => {
  return (
    <div>    
        <div className='head'>
            <h1 className='text-5xl !mt-5 font-lato'><center>Get in Touch</center></h1>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px'}} className='!mt-5 !mb-20'>
          <Typography.Title level={3} style={{ textAlign: 'left' }}>
            Drop Us a Line
          </Typography.Title>
            <p className='text-gray-700'>Feel free to connect with us through our online channels for updates, news and more.</p>
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
