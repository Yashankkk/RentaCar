import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleEditClick = () => {
    form.setFieldsValue(user);
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = async () => {
    try {
      const updatedData = await form.validateFields();
      const updatedUser = { ...user, ...updatedData };

      await axios.put(`http://localhost:3000/api/auth/adminupdate/${user._id}`, updatedUser);
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setEditing(false);
      message.success('Profile updated successfully!');
    } catch (err) {
      console.error('Update failed:', err);
      message.error('Failed to update profile.');
    }
  };

  return (
    <div>
      <section
        className="h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="!p-10 text-center bg-white/10 text-white rounded-lg backdrop-blur-sm w-[500px]">
          <h1 className="text-4xl font-bold !mb-5">User Profile</h1>

          {!editing ? (
            <>
              <ul className="space-y-3 text-xl text-left">
                <li><strong>Full Name:</strong> {user.fullName}</li>
                <li><strong>Username:</strong> {user.username}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Phone:</strong> {user.phone}</li>
              </ul>
              <Button onClick={handleEditClick} type="primary" className="!mt-6">
                Edit
              </Button>
            </>
          ) : (
            <Form form={form} layout="vertical" className="text-left !mt-4">
              <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <div className="flex justify-center gap-4">
                <Button type="primary" onClick={handleSave}>
                  Save
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </div>
            </Form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
