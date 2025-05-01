import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from '../Components/Calender';


const Dashboard = () => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        console.log(user);
    },[])
    
    const navigate = useNavigate();

    return (
        <div>
            <section className="h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBkdnRlcW9yMDl2Y2Qzc3QxOTR3ZHh1NmxzZ2Vhd3BweGFpNjh2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif')" }}>
                <h1 className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 !p-4 rounded-lg">
                    Cars
                </h1>
                <h1 className='text-xl !p-5'>Welcome {user?.username}</h1>
            <div className='!p-10 '>
                <Calendar />
            </div>
            </section>

            
            
        </div>
    )
}

export default Dashboard