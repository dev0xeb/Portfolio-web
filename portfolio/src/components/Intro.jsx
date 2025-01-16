import React from 'react'
import dp from '../images/newdp.png'
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro-container flex flex-col md:flex-row justify-between items-center mt-[70px] md:max-w-[1240px] mx-auto px-2 md:px-4' >
        <div className=' w-full md:w-1/2'>
        <div>
           <p className='mt-14 font-bold text-[40px] text-blue-900'>Ayoade Clinton</p>
           <p className='font-semibold text-[25px] text-blue-900'>Software Engineer</p>
        </div>
        <div>
            <p className='mt-8 w-[500px] text-[18px] text-gray-700 font-medium leading-[1.7]'>👋I'm a Software Engineer with a strong foundation in both frontend and backend development. I specialize in creating efficient and user-friendly applications, leveraging my expertise to solve complex problems and deliver high-quality solutions. Let's collaborate to build innovative and impactful projects.</p>
        </div>
        <button className='px-4 py-2 bg-[#007BFF] hover:bg-[#0056D2] text-white text-[16px] font-medium rounded mt-4'><a href="#contact">Message</a></button>
        <Link to = 'https://drive.google.com/file/d/1gC9WuSwxqAExDTC7uQVMCQF_udOzY_IP/view?usp=sharing'><button className='px-4 py-2  bg-[#007BFF] hover:bg-[#0056D2] text-white text-[16px] font-medium rounded mt-4 ml-8'>View CV</button></Link>
        </div>
        <div className=''>
            <img src={dp} alt="" className='flex h-96 w-96 rounded-full opacity-2000' style={{ filter: 'blur(0)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', }}/>
        </div>
    </div>
  )
}

export default Intro
