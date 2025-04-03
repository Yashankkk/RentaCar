import React,{useState} from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { Typography } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const { TextArea } = Input; 

const Contact = () => {
  const [form] = Form.useForm();
  const [data,setData]=useState()
  console.log("yeh ha mera data",data?.message)
  
  const onFinish = async(values) => {
    console.log("Received values of form:", values);
    try{
      await axios.post(`http://localhost:3000/api/auth/contact`, values) 
      .then((response)=>{
        console.log("Message sent Successfully!",response.data);
        setData(response.data)
      })

    }
    catch(error) {
      console.error("Message failed to delievered",error);
    }
  };

  return (
    <div>
      <Header />
      <div className="head">
        <h1 className="text-5xl !mt-5 font-lato">
          <center>Get in Touch</center>
        </h1>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }} className="!mt-5 !mb-20">
        <Typography.Title level={3} style={{ textAlign: "left" }}>
          Drop Us a Line
        </Typography.Title>
        <p className="text-gray-700">
          Feel free to connect with us through our online channels for updates, news, and more.
        </p>
        <Form
          form={form}
          className="!mt-10"
          name="basic"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Row with Full Name, Email, and Phone Number */}
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

export default Contact
