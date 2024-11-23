import React from 'react'
import BodCard from '../components/BodCard'
import bod from '../data/bod'
import {useState} from 'react'


function Board() {

  const tags = ["View all" , "Faculty" , "Co-ordinators" , "Secretary" , "Treasure" , "Technical" , "Graphics" , "Event Co-ordinators", "Others"]
  const [activeCategory, setActiveCategory] = useState('View all');

  const handleSwitch = (val : any) => {
      setActiveCategory(val);
  }



  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='p-[40px] mt-[20px] text-[40px] w-1/2 text-center font-source font-normal'>Meet the Team
      that Makes the <span className='text-[45px] font-source-italic text-[--primary] font-light' >MAGIC</span> Happen,</h1>
      <div className='flex w-[80%] justify-evenly '>
        {tags.map((val,idx)=>{return(<div 
                                      key={idx} 
                                      className={`px-2 py-1 h-fit w-fit rounded-md text-[14px] ${activeCategory === val ? ' bg-white' : ''} hover:cursor-pointer`} 
                                      onClick={()=>{handleSwitch(val)}}>{val}</div>)})}
      </div>
      <div className='pt-10'>
        {bod.map((val,idx)=>{return(<BodCard key={idx} data = {val}/>)})}
      </div>


    </div>
  )
}

export default Board