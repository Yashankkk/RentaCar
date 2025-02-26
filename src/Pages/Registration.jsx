import React,{useState} from 'react'


const Registration = () => {
    const array =[
        {name:"John",age:25},
        {name:"Anna",age:30},
        {name:"Peter",age:35}
    ]
    const [name, setName] = useState('')
    console.log(name?.[1]);

    const handle=()=>{
        setName(array)
    }
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='!p-10 !m-10 md:!p-10 w-full  '>
            <h1 className='text-2xl font-bold'>Don't have a account? Register Now</h1>
            <p className='text-gray-700 !mt-10'>Welcome to RideEase. We're excited to have you on board.
            By creating an account with us, you'll gain access to a range of benefits and convenient features that will enhance your car rental experience.
            </p>
        </div>
        {/* <button onClick={handle} className='cursor-pointer'>Click</button> */}

    </div>
  )
}

export default Registration
