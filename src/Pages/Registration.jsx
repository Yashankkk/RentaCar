import React,{useState} from 'react';
import { Form, Input, Button, Row, Col, Typography, } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Registration = () => {
  const [form] = Form.useForm();
  const [data,setData]=useState()
  console.log("yeh ha mera data",data?.message)
  // const notify = () => toast.info(data?.message);
  const notify = () => toast.info("User Registered Successfully");
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try{
      await axios.post("http://localhost:3000/api/auth/registration",values)
      .then((response)=>{
        console.log("Registration Successfull:", response.data);
        setData(response.data)
      })
   
    } 
    catch (error) {
      console.error("Registration Failed:", error.response?.data || error.message);
    }
  };

  const validatePassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Passwords do not match!'));
    },
  });

  return (
    <div>
      <Header />
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px'}} className='!mt-20 !mb-20'>
      <Typography.Title level={3} style={{ textAlign: 'left' }}>
      Don't have a account? Register Now
      </Typography.Title>
      <p className='text-gray-700'>Welcome to RideEase. We're excited to have you on board.
      By creating an account with us, you'll gain access to a range of benefits and convenient features that will enhance your car rental experience.</p>
      <br />
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        scrollToFirstError
      >
        <Row gutter={16}>
          {/* First row with Name and Username */}
          <Col xs={24} sm={12}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Full Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Second row with Email and Phone */}
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  type: 'email',
                  message: 'Please enter a valid email!',
                },
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email Address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Third row with Passwords */}
          <Col xs={24} sm={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters',
                },
              ]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="confirm"
              label="Re-enter Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                validatePassword,
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Re-enter Password" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button onClick={notify} type="primary" htmlType="submit" style={{ width: '100%' }} >
            Register
          </Button>
          <ToastContainer />  
        </Form.Item>
      </Form>
    </div>
    <Footer />
    </div>
  );
};

export default Registration;