import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { Typography } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const { TextArea } = Input; 

const Contact = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/auth/contact`, values);
      console.log("Message sent Successfully!", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Message failed to deliver", error);
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Banner with background image */}
      <section
        className="h-85 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">Contact</h1>
      </section>

      {/* Contact Form Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }} className="!mt-5 !mb-20">
      <h1 className="text-black text-center text-4xl md:text-5xl">Get in Touch</h1>
      <br />
        <Typography.Title level={3} style={{ textAlign: "left" }}>
          Drop Us a Line
        </Typography.Title>
        <p className="text-gray-700">
          Feel free to connect with us through our online channels for updates, news, and more.
        </p>

        {data?.message && (
          <div className="bg-green-100 text-green-800 p-3 rounded mt-4">
            {data.message}
          </div>
        )}

        <Form
          form={form}
          className="!mt-10"
          name="basic"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: "Please input your Full Name!" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { type: "email", message: "Please enter a valid email!" },
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email Address" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xs={24}>
              <Form.Item
                label="Your Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <TextArea placeholder="Your Message" rows={4} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
