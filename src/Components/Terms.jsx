import React from 'react';
import { Card, Typography, List } from 'antd';
import {
  CarOutlined,
  UserOutlined,
  CreditCardOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  StopOutlined,
  FileProtectOutlined,
  GlobalOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const terms = [
  {
    title: 'Eligibility to Rent',
    icon: <UserOutlined />,
    description: 'Renter must be at least 21 years old with a valid driver’s license. Additional verification may be required.'
  },
  {
    title: 'Booking & Payment',
    icon: <CreditCardOutlined />,
    description: 'Reservations are secured via online payment. Security deposits may apply. We accept major credit/debit cards.'
  },
  {
    title: 'Pickup & Return Policy',
    icon: <ClockCircleOutlined />,
    description: 'Vehicles must be picked up and returned on time. Late returns may result in extra charges.'
  },
  {
    title: 'Vehicle Use',
    icon: <CarOutlined />,
    description: 'Vehicles must not be used for illegal activities, racing, off-roading, or by unauthorized drivers.'
  },
  {
    title: 'Insurance & Liability',
    icon: <SafetyCertificateOutlined />,
    description: 'We provide basic insurance. Renters are liable for damages, traffic violations, or theft not covered under policy.'
  },
  {
    title: 'Prohibited Activities',
    icon: <StopOutlined />,
    description: 'Smoking, transporting hazardous materials, and driving under the influence are strictly prohibited.'
  },
  {
    title: 'Privacy Policy',
    icon: <FileProtectOutlined />,
    description: 'Your personal information is protected and used only to process bookings and enhance service.'
  },
  {
    title: 'Governing Law',
    icon: <GlobalOutlined />,
    description: 'This agreement is governed by the laws of your jurisdiction. Disputes will be resolved under those laws.'
  },
  {
    title: 'Limitation of Liability',
    icon: <ExclamationCircleOutlined />,
    description: 'We are not liable for indirect damages, delays, or losses incurred during the rental period.'
  }
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center !px-4"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
    }}>
      <Card className="max-w-[900px] !mx-auto !my-10 !p-6 bg-white shadow rounded-2xl">
      <Title level={2}>Terms and Conditions</Title>
      <Paragraph>
        Please read these Terms and Conditions carefully before using our car rental services.
        By booking a vehicle, you agree to be bound by these terms.
      </Paragraph>
      <List
        itemLayout="horizontal"
        dataSource={terms}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div style={{ fontSize: '24px', color: '#1890ff' }}>{item.icon}</div>}
              title={<strong>{item.title}</strong>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
    </div>
  );
};

export default TermsAndConditions;
