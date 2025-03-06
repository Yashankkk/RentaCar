import React from 'react';
import { Form, Input, Button, Row, Col, Typography, } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Here you would typically send the form data to your backend
  };

  const validatePassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two passwords do not match'));
    },
  });

  return (
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
              name="name"
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
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;

// import React,{useState} from 'react'


// const Registration = () => {
//     const array =[
//         {name:"John",age:25},
//         {name:"Anna",age:30},
//         {name:"Peter",age:35}
//     ]
//     const [name, setName] = useState('')
//     console.log(name?.[1]);

//     const handle=()=>{
//         setName(array)
//     }
//   return (
//         {/* <button onClick={handle} className='cursor-pointer'>Click</button> */}

//     </div>
//   )
// }

// export default Registration