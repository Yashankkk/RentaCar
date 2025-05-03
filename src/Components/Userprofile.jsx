import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/auth/user/${userid}`);
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    if (userid) fetchUser();
  }, [userid]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <section className='h-[85vh] w-full bg-cover bg-center'
      style={{backgroundImage: "url('https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",}}>
      </section>
      <div className="!p-10 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold !mb-5">User Profile</h1>
      <ul className="space-y-3">
        <li><strong>Full Name:</strong> {user.fullName}</li>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
      </ul>
    </div>
    </div>
  )
}

export default Profile;