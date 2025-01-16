import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { library }  from '@fortawesome/fontawesome-svg-core'

library.add(faAsterisk)
const Skills = () => {
  return (
    <div id='skills'className='flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4'>
      <p className='text-4xl font-bold text-blue-900'>Skills</p>
      <p className='text-2xl font-semibold text-[#0056D2] mt-[12px]'>My Technical Level</p>
      <div className='flex justify-between mt-10 '>
        <div className=' bg-blue-100 w-72 rounded-lg px-4 mr-14 '>
          <p className='flex flex-col items-center mt-4 text-[20px] font-bold'>Frontend Engineer</p>
          <p className='text-[16px] font-semibold mt-3'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Javascript</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> React.js</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Tailwind CSS</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> CSS</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> HTML</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> TypeScript</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Vite</p> 
        </div>
        <div className=' bg-blue-100 w-72 rounded-lg px-4 mr-14'>
          <p className='flex flex-col items-center mt-4 text-[20px] font-bold'>Backend Engineer</p>
          <p className='text-[16px] font-semibold mt-3'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Java</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Python</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Node.js</p>
        </div>
        <div className=' bg-blue-100 w-72 h-[390px] rounded-lg px-4 '>
          <p className='flex flex-col items-center mt-4 text-[20px] font-bold'>Technologies</p>
          <p className='text-[16px] font-semibold mt-3'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Spring Boot</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Test Driven Development (TDD)</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Django</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Flask</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Git & GitHub Actions</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Maven</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Redux</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Mongo DB</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Postman</p> 
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> Rest API</p>
          <p className='text-[16px] font-semibold mt-1'><FontAwesomeIcon icon="fa-solid fa-asterisk" style = {{color: 'blue'}} className='mr-1'/> My SQL</p> 
        </div>
      </div>
      
    </div>
  )
}

export default Skills
