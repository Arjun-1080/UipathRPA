import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[--primary] w-full h-[30vh] py-10 px-16 flex justify-between '>
       <Link to={'/about'} className='font-source text-[--ternary] text-[17px]'>ABOUT US</Link>
        <div className='flex flex-col gap-3'>
            <h1 className='font-source text-[--ternary] text-[17px]'>SOCIAL LINKS</h1>
            <Link to={'https://www.linkedin.com/company/uipath-innovators-kls-git/'} target='_blank'><img src="/icons/LinkedIn.svg" alt="" className='h-[30px] w-[30px]'/></Link>
            <Link to={'https://www.instagram.com/uipath_rpa_innovators_klsgit/'} target='_blank'><img src="/icons/Instagram.svg" alt="" className='h-[30px] w-[30px]'/></Link>
        </div>
    </div>
  )
}

export default Footer