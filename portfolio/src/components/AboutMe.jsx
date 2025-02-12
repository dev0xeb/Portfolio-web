const AboutMe = () => {
    return (
      <div className='intro-container flex flex-col mt-12 md:mt-[70px] max-w-[1240px] mx-auto px-4 md:px-8'>
        <div className='w-full flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12'>
          <h1 className='text-2xl md:text-3xl lg:text-[30px] font-bold text-left text-blue-900 mb-4 md:mb-0 md:max-w-[250px] lg:max-w-[300px]'>
            About Me
          </h1>
          <div className='md:flex-grow'>
            <p className='text-base md:text-lg lg:text-[18px] font-medium text-gray-700 leading-relaxed lg:leading-loose'>
              A Software Engineer who thrives where frontend artistry meets backend rigor, 
              crafting applications that balance intuition with resilience. Proficient in Frontend, 
              Backend languages and UI/UX design, I dissect complexity to engineer solutions that 
              prioritize people—like the financial inclusion tool that earned 3rd place at SUI Hackfest 2024, 
              where code met compassion to empower underserved communities. My toolkit? Clean architecture, 
              relentless curiosity, and a dash of theatre arts flair (because even the best algorithms 
              deserve a good story). Let's collaborate on tech that works like logic and feels like magic 
              because impact happens when function and humanity shake hands.
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default AboutMe