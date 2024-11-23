import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  
  const navdata = [{
                    name : "Board",
                    url: "/board"
                  },
                   {
                    name : "Events", 
                    url : "/events"
                  },
                  {
                    name : "Blogs", 
                    url : "/blogs"
                  }];
  
  return (
    <header className='h-[70px] mx-[20px] border-b-[0.5px] border-b-[--border]'>
      <nav className='p-3 flex gap-2 justify-between items-center'>
          <Link  to={'/'} className='flex gap-2'>
              <img src="/icons/RPAlogo.svg" className='h-[40px]' alt="" />
              <div className='flex flex-col gap-0'>
                <h1 className='text-[15px]'>UI Path RPA Innovators</h1>
                <h1 className='text-[10px] font-bold leading-none'>KLS GIT</h1>
              </div>
          </Link>
          <div className='flex gap-[80px] mr-[40px]'>
              {navdata.map((val,idx)=>{
                return(
                  <Link key={idx} to={val.url} className='text-[--primary] font-semibold hover:scale[1.1]'>{val.name}</Link>
            )})}
          </div>
      </nav>
    </header>
  )
}

export default Navbar