

function About() {
  return (
    <div className='h-[calc(100vh-70px)] w-full flex flex-col justify-start items-center text-center'>
        <div className='flex flex-col justify-start items-start w-full pt-8 pl-20 gap-0'>
            <h1 className='text-[50px] font-source ' >About</h1>
            <h1 className='text-[45px] font-source text-[--primary] mt-[-10px]'>Us,</h1>
        </div>
       <div className='flex gap-6'>
       <div className='py-8 flex flex-col gap-4 p-10 w-[40vw]'>
            <p className='text-[15px] text-start'>
                The UiPath RPA Innovators Club at KLS Gogte Institute of Technology (GIT) was founded in August 2024 with a mission to foster innovation and automation through cutting-edge robotic process automation (RPA) technologies.
            </p>
            <p className='text-[15px]  text-start'>
                Our club provides a vibrant platform for students to explore, learn, and implement UiPath's advanced automation tools, empowering them to shape the future of automation-driven industries.
                At the UiPath RPA Innovators Club, we focus on enhancing technical skills, solving real-world automation challenges, and fostering collaboration among like-minded students. 
            </p>
            <p className='text-[15px]  text-start'>
                Through workshops, hackathons, and collaborative projects, our members gain hands-on experience and industry-ready expertise that sets them apart in today's fast-evolving technological landscape.
                Join us to innovate, automate, and lead the way in the future of RPA!
            </p>
       </div>
        <img src="/icons/RPAlogo.svg" alt=""  className='h-[300px] overflow-y-hidden'/>
       </div>
    </div>
  )
}

export default About