import React from 'react';
import { Tabs, Collapse, Form, Input, Button, Select } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;

const HelpCenter = () => {
  const [form] = Form.useForm();

  const handleContactSubmit = (values) => {
    console.log('Support form submitted:', values);
    alert('Your message has been submitted!');
    form.resetFields();
  };

  return (
    <div
  className="min-h-screen bg-cover bg-gray-100 flex items-center justify-center !p-6 sm:!p-12"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  }}
>
  <div className="max-w-4xl w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md rounded-lg !p-6">
    <h2 className="text-2xl font-semibold !mb-6 text-center">Help Center</h2>

    <Tabs defaultActiveKey="1">
      {/* FAQ Tab */}
      <TabPane tab="FAQs" key="1">
        <Collapse accordion>
          <Panel header="How do I book a ride?" key="1">
            Open the Website, click on Cars, select a car according to your needs, then hit 'Rent Now'. Fill the details and confirm.
          </Panel>
          <Panel header="How can I report a damage?" key="2">
            First log in, then go to Report, fill in the details, and click 'Submit Report'.
          </Panel>
          <Panel header="How do I pay?" key="3">
            You can pay using UPI, cards, or wallet after the ride.
          </Panel>
        </Collapse>
      </TabPane>

      {/* Contact Support */}
      <TabPane tab="Contact Support" key="2">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleContactSubmit}
          className="!mt-4 space-y-4"
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Issue Type" name="type" rules={[{ required: true }]}>
            <Select placeholder="Select an issue type">
              <Select.Option value="booking">Booking Issue</Select.Option>
              <Select.Option value="payment">Payment Issue</Select.Option>
              <Select.Option value="app">Bug</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true }]}>
            <TextArea rows={4} placeholder="Describe your issue..." />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</div>

  );
};

export default HelpCenter;
