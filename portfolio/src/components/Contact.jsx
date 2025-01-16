import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { library }  from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faWhatsapp, faArrowRight)
const Contact = () => {
  return (
    <div id='contact'className='flex flex-col justify-center items-center mt-[120px] max-w-[1240px] mx-auto px-4'>
        <p className='text-4xl font-bold text-blue-900'>Get in touch</p>
        <p className='text-xl font-semibold text-[#0056D2] mt-[12px]'>Contact Me</p>
        <div className='flex  mt-6 space-x-28'>    
            <div className='flex flex-col items-center justify-center bg-blue-100 w-64 pt-6 pb-4 rounded'>
                <FontAwesomeIcon icon={faEnvelope} style = {{color: 'blue', fontSize: '25px' }} className='mr-3'/>
                <p className='pt-3 font-semibold text-[18px]'>Email Address</p>
                <p className=''>clintonayomide96@gmail.com</p>
                <button className='pt-3 text-[13px]'><a href="mailto:clintonayomide96@gmail.com">Write me <FontAwesomeIcon icon={faArrowRight} style = {{color: 'blue'}} className='ml-2'/></a></button>
            </div>
            <div className='flex flex-col items-center justify-center bg-blue-100 w-64 pt-6 pb-4 rounded'>
            <FontAwesomeIcon icon={faWhatsapp} style = {{color: 'blue', fontSize: '25px'}} size='lg' className='mr-3'/>
                <p className='pt-3 font-semibold text-[18px]'>WhatsApp</p>
                <p>+2347026612575</p>
                <button className='pt-3 text-[13px]'><a href="https://wa.me/07026612575">Message me <FontAwesomeIcon icon={faArrowRight} style = {{color: 'blue'}} className='ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'/></a></button>
            </div>
        </div>
    </div>
  )
}

export default Contact
