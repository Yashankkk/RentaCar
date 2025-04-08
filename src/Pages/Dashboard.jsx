import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Calendar from 'react-calendar'


const Dashboard = () => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        console.log(user);
    },[])
    
    const navigate = useNavigate();

    // const handleLogout = ()=>{
    //     localStorage.removeItem('user-info');
    //     navigate('/login');
    // }

    return (
        <div>
            <h1 className='text-xl !p-5'>Welcome {user?.username}</h1>
            {/* <h3>{user?.email}</h3> */}
            {/* <img src={user?.image} style={{width:200}} alt={user?.name}/> */}
            {/* <div>
                <Calendar />
            </div> */}
            
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
}

export default Dashboard