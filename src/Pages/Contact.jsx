import React from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
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
            >
              <Row gutter={16}>
              <Col xs={24} sm={12}>
              <Form.Item
              label="FullName"
              name="FullName"
              rules={[
                {
                  required: true,
                  message: 'Please input your FullName!',
                },
              ]}
              >
                <Input />
                </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                <Form.Item
                label="UserName"
                name="user"
                rules={[
                  {
                    required: true,
                    message: 'Please input your UserName!',
                  },
                ]}
                ></Form.Item>
                </Col>
                </Row>
                
                <Row gutter={16}>
                  {/* Second row with Email and Phone */}
                  <Col xs={24} sm={12}>
                  <Form.Item
                  label="Email Address"
                  name="email"
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
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                    <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                    ]}
                    >
                      </Form.Item>
                      </Col>
                      </Row>
                      <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" className='!ml-8' >
                          Submit
                        </Button>
                      </Form.Item>
                  </Form>
        </div>
    </div>
  )
}

export default Contact
