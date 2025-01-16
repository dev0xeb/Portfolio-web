import React from 'react'
import '../index.css'

const Headers = () => {
  return (
    <>
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl text-[#0056D2] font-extrabold flex-grow animate-bounce'>Clinton</h1> 
               <ul className='flex space-x-4'>
                    <li className='p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl'><a href='#skills' className=''>Skills</a></li>
                    <li className='p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl'><a href='#qualifications' className=''>Qualifications</a></li>
                    <li className='p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl'><a href='#contact' className=''>Contact</a></li>
                </ul>
    </nav>
    <hr className='' />
    </>
  )
}

export default Headers
