import React from 'react';
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  DatePicker,
  message,
  Card
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;

const UserReportForm = () => {
  const [form] = Form.useForm();

 const onFinish = async (values) => {
  console.log('submit clicked');
  const formData = new FormData();
  formData.append('issueType', values.issueType);
  formData.append('subject', values.subject);
  formData.append('description', values.description);
  if (values.bookingId) formData.append('bookingId', values.bookingId);
  if (values.issueDate) formData.append('issueDate', values.issueDate.toISOString());

  // Append files
  if (values.upload && values.upload.fileList) {
    values.upload.fileList.forEach(file => {
      formData.append('files', file.originFileObj);
    });
  }

  try {
 const response = await fetch(`${BASE_URL}/api/report/submit-report`, {
  method: 'POST',
  body: formData
});


    const result = await response.json();
    if (response.ok) {
      message.success(result.message || 'Report submitted successfully!');
      alert('Report submitted successfully!'); // ✅ Native alert
      form.resetFields();
    } else {
      message.error(result.message || 'Failed to submit report');
      alert('Failed to submit report'); // ✅ Native alert
    }
  } catch (error) {
    console.error('Submit error:', error);
    message.error('Error submitting report');
    alert('Error submitting report'); // ✅ Native alert
  }
};


  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center !px-4"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
    }}>
        <Card
      title="Report an Issue"
      className="max-w-[900px] !mx-auto !my-10 !p-6 bg-white shadow rounded-2xl w-full"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          issueDate: null
        }}
      >
        <Form.Item
          label="Issue Type"
          name="issueType"
          rules={[{ required: true, message: 'Please select an issue type!' }]}
        >
          <Select placeholder="Select issue type">
            <Option value="vehicle_damage">Vehicle Damage</Option>
            <Option value="payment_issue">Payment Issue</Option>
            <Option value="driver_misconduct">Driver Misconduct</Option>
            <Option value="late_delivery">Late Delivery or Pickup</Option>
            <Option value="technical">Website/App Bug</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input placeholder="Short summary of your issue" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please describe the issue' }]}
        >
          <TextArea rows={4} placeholder="Provide full details of the issue" />
        </Form.Item>

        <Form.Item label="Booking ID (optional)" name="bookingId">
          <Input placeholder="Enter your booking reference if available" />
        </Form.Item>

        <Form.Item label="Date of Issue" name="issueDate">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Upload Supporting Files" name="upload">
          <Upload.Dragger name="file" multiple={true} beforeUpload={() => false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to upload</p>
            <p className="ant-upload-hint">You can upload images, PDFs, or receipts.</p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Report
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  );
};

export default UserReportForm;
