import React, { useState } from 'react';
import { Form, Input, DatePicker, TimePicker, Button, Row, Col, message } from 'antd';
import { NavLink } from 'react-router-dom';
// import dayjs from 'dayjs';

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
    console.log(data);
    // message.success('Vehicle search submitted!');
  };

  return (
    <div className="!p-4 md:!p-8 bg-white rounded w-full">
      <Form onFinish={onFinish} layout="vertical">
        <h3 className="text-lg font-semibold !mb-4">What is your vehicle type?</h3>
        <Row gutter={[12, 12]} className="!mb-4">
          {vehicleTypes.map((type) => (
            <Col key={type} xs={12} sm={6}>
              <Button
                block
                type={selectedVehicle === type ? 'primary' : 'default'}
                style={{
                  backgroundColor: selectedVehicle === type ? '#0022cc' : '#fff',
                  color: selectedVehicle === type ? '#fff' : '#000',
                  borderColor: selectedVehicle === type ? '#0022cc' : '#ccc',
                }}
                onClick={() => setSelectedVehicle(type)}
              >
                {type}
              </Button>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="pickupLocation" label="Pick Up Location" rules={[{ required: true, message: 'Please enter pickup location' }]}>
              <Input placeholder="Enter your pickup location" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="dropoffLocation" label="Drop Off Location" rules={[{ required: true, message: 'Please enter dropoff location' }]}>
              <Input placeholder="Enter your dropoff location" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="pickupDate" label="Pick Up Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="pickupTime" label="Time" rules={[{ required: true }]}>
              <TimePicker format="HH:mm" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="returnDate" label="Return Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="returnTime" label="Time" rules={[{ required: true }]}>
              <TimePicker format="HH:mm" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="text-center !mt-4">
          <NavLink to="/cars">
            <Button
              type="primary"
              htmlType="submit"
              className="hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: '#0022cc', borderColor: '#0022cc' }}
            >
              Find a Vehicle
            </Button>
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VehicleForm;
