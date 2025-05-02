import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { Typography } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import { ToastContainer, toast } from'react-toastify';
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
      <div className="!mt-5 !mb-20 !px-6">
  <h1 className="text-black text-center text-4xl md:text-5xl">Get in Touch</h1>
  <br />
  <Row gutter={[32, 32]}>
    {/* Contact Form Column */}
    <Col xs={24} md={16}>
      <Typography.Title level={3}>Drop Us a Line</Typography.Title>
      <p className="text-gray-700">
        Feel free to connect with us through our online channels for updates, news, and more.
      </p>

      {data?.message && (
        <div className="bg-green-100 text-green-800 !p-3 rounded !mt-4">
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
    </Col>

    {/* Contact Info Cards Column */}
    <Col xs={24} md={8}>
      <div className="space-y-6">
        {/* US Office Card */}
        <div className="shadow rounded-lg border-gray bg-gray-100 w-80 shadow-lg !p-4">
          <h3 className="font-bold text-lg text-blue-900">US Office</h3>
          <p className="text-gray-700">📍 08 W 36th St, New York, NY 10001</p>
          <p className="text-green-700">📞 +1 333 9296</p>
          <p className="text-green-700">✉️ contact@example.com</p>
          <p className="text-green-700">📄 Download Brochure</p>
        </div>
        <br />
        <br />
        <div className="shadow rounded-lg border-grey bg-gray-100 w-80 shadow-lg !p-4">
          <h3 className="font-bold text-lg text-blue-900">AU Office</h3>
          <p className="text-gray-700">📍 100 Mainstreet Center, Sydney</p>
          <p className="text-green-700">📞 +61 333 9296</p>
          <p className="text-green-700">✉️ contact@example.com</p>
          <p className="text-green-700">📄 Download Brochure</p>
        </div>
      </div>
    </Col>
  </Row>
</div>

      
      <Footer />
    </div>
  );
};

export default Contact;
