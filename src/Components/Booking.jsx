import React, { useState } from 'react';
import { Form, Input, DatePicker, TimePicker, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';

const vehicleTypes = ['Car', 'Van', 'Scooter', 'Bike'];

const VehicleForm = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const onFinish = async (values) => {
    const data = {
      vehicleType: selectedVehicle,
      pickupLocation: values.pickupLocation,
      dropoffLocation: values.dropoffLocation,
      pickupDate: values.pickupDate.format('YYYY-MM-DD'),
      pickupTime: values.pickupTime.format('HH:mm'),
      returnDate: values.returnDate.format('YYYY-MM-DD'),
      returnTime: values.returnTime.format('HH:mm'),
    };

    try {
      const response = await axios.post('http://localhost:3000/api/auth/vehicles', data);
      message.success('Vehicle search submitted!');
      console.log('POST response:', response.data);

      // If you also want to get available vehicles:
      const getResponse = await axios.get('http://localhost:3000/api/auth/vehicles');
      console.log('GET response:', getResponse.data);

    } catch (error) {
      console.error(error);
      message.error('Something went wrong!');
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <h3 className='!p-2 text-lg'>What is your vehicle type?</h3>
      <Row gutter={16} style={{ marginBottom: 20 }}>
        {vehicleTypes.map((type) => (
          <Col key={type}>
            <Button
              type={selectedVehicle === type ? 'primary' : 'default'}
              style={{
                backgroundColor: selectedVehicle === type ? '#0022cc' : '#fff',
                color: selectedVehicle === type ? '#fff' : '#000',
                width: 100
              }}
              onClick={() => setSelectedVehicle(type)}
            >
              {type}
            </Button>
          </Col>
        ))}
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="pickupLocation" label="Pick Up Location" rules={[{ required: true }]}>
            <Input placeholder="Enter your pickup location" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="dropoffLocation" label="Drop Off Location" rules={[{ required: true }]}>
            <Input placeholder="Enter your dropoff location" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="pickupDate" label="Pick Up Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="pickupTime" label="Time" rules={[{ required: true }]}>
            <TimePicker format="HH:mm" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="returnDate" label="Return Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="returnTime" label="Time" rules={[{ required: true }]}>
            <TimePicker format="HH:mm" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" className="hover:scale-105 " htmlType="submit" style={{ backgroundColor: '#0022cc', borderColor: '#0022cc' }}>
          Find a Vehicle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VehicleForm;
