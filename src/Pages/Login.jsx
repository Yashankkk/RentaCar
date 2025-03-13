import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const [data,setData]=useState()
  console.log("yeh ha mera data",data?.message)
  const notify = () => toast.info("Login Successfull!");
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try{
      const res = await axios.post("http://localhost:3000/api/auth/login",values)
      .then((res)=>{
        console.log("Login Successfull:", res.data);
        setData(res.data)
      })
    } 
    catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
    }
  
  };

  return (
    <div className='h-screen bg-[url("assets\hero_fpo.jpg")] flex flex-col justify-center items-center bg-cover opacity-90 bg-center bg-no-repeat'>
      <div className='!p-10 bg-white md:!p-10 rounded-sm shadow-xl w-full max-w-md'>
      <h1 className='font-serif text-center text-4xl md:text-5xl'>Login</h1>
      <br />
      <p className='text-center mt-2 text-sm md:text-base'>doesn't have an account? <NavLink to="/Registration"><span className='text-blue-800 underline !ml-1'>Sign Up</span></ NavLink></p>
      <Form className='!mt-10'
      name="basic"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      >
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        >
          <Input />
          </Form.Item>
          
          <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          >
            <Input.Password />
            </Form.Item>
            
            <div className="flex justify-between items-center text-sm">
            <Form.Item name="remember" valuePropName="checked" className="mb-0">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <NavLink to="" className='text-blue-800 '>
              Forgot Password?
            </NavLink>
            </div>
              
            <Form.Item label={null}>
              <Button onClick={notify} type="primary" htmlType="submit" className='!ml-8' >
                Submit
              </Button>
              <ToastContainer />
            </Form.Item>
            
      </Form>
      </div>
    </div>
  )
};

export default Login;