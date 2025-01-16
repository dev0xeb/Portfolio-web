import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { library }  from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faCopyright)
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4 bg-blue-700'>
      <div className='pt-9'>
        <a href="www.linkedin.com/in/clinton-ayoade-45315b238"><FontAwesomeIcon icon={faLinkedin} style={{ color:'white', fontSize:'20px'}} className='mr-6 group-hover:bg-black cursor-pointer'/></a>
        <a href="https://github.com/dev0xeb"><FontAwesomeIcon icon={faGithub} style={{ color:'white', fontSize:'20px'}} className=' group-hover:bg-black cursor-pointer'/></a>
      </div>
      <div>
        <p className='text-[16px] mt-1 pb-6 text-white'><FontAwesomeIcon icon={faCopyright} style={{ color:'white'}}/> Ayoade Clinton. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
