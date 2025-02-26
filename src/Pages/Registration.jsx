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
    <div>
        <button onClick={handle} className='cursor-pointer'>Click</button>

    </div>
  )
}

export default Registration
