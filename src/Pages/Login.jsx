import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink } from "react-router";

const onFinish = (values) => {
  console.log('Login:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const login = () => {
  return (
    <div className='h-screen bg-[url("assets\hero_fpo.jpg")] flex flex-col justify-center items-center bg-cover opacity-90 bg-center bg-no-repeat'>
      <div className='!p-10 bg-white md:!p-10 rounded-sm shadow-xl w-full max-w-md'>
      <h1 className='font-serif text-center text-4xl md:text-5xl'>Login</h1>
      <p className='text-center mt-2 text-sm md:text-base'>doesn't have an account? <NavLink to="/Registration"><span className='text-blue-800 underline !ml-1'>Sign Up</span></ NavLink></p>
      <Form className='!mt-10'
      name="basic"
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
              <Button type="primary" htmlType="submit" className='!ml-8'>
                Submit
              </Button>
            </Form.Item>
            
      </Form>
      </div>
    </div>
  )
}

export default login