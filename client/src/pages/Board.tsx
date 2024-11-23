import React from 'react'
import BodCard from '../components/BodCard'
import bod from '../data/bod'
import {useState} from 'react'

interface BodMember {
  tag: string;
  name: string;
  role: string;
  url: string;
}

function Board() {
  const tags = ["View all", "Faculty", "Chairman", "Secretary", "Treasurer", "Technical", "Graphics", "Event Co-ordinators", "Others"]
  const [activeCategory, setActiveCategory] = useState<string>('View all');

  // Group members by tag when in "View all" mode
  const groupedByTag = React.useMemo(() => {
    const groups: { [key: string]: BodMember[] } = {};
    bod.forEach((member) => {
      if (!groups[member.tag]) {
        groups[member.tag] = [];
      }
      groups[member.tag].push(member);
    });
    return groups;
  }, []);

  const filteredData = activeCategory === "View all" 
    ? bod 
    : bod.filter((member: BodMember) => activeCategory === member.tag);

  const handleSwitch = (val: string) => {
    setActiveCategory(val);
  }

  const renderMembers = () => {
    if (activeCategory !== "View all") {
      return (
        <div className='pt-10 gap-8 flex flex-wrap w-full justify-center'>
          {filteredData.map((val, idx) => (
            <BodCard key={idx} data={val} />
          ))}
        </div>
      );
    }

    // Render grouped members in "View all" mode
    return (
      <div className='pt-10 w-full'>
        {tags.slice(1).map((tag) => ( // Skip "View all" from tags
          groupedByTag[tag] && (
            <div key={tag} className='mb-12'>
              <div className='flex flex-wrap gap-8 justify-center'>
                {groupedByTag[tag].map((member, idx) => (
                  <BodCard key={`${tag}-${idx}`} data={member} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center scrollbar-hide overflow-y-auto'>
      <h1 className='p-[40px] mt-[20px] text-[40px] w-1/2 text-center font-source font-normal'>
        Meet the Team that Makes the 
        <span className='text-[45px] font-source-italic text-[--primary] font-light'> MAGIC </span> 
        Happen,
      </h1>
      <div className='flex w-[80%] justify-evenly'>
        {tags.map((val, idx) => (
          <div 
            key={idx} 
            className={`px-2 py-1 h-fit w-fit rounded-md text-[14px] ${
              activeCategory === val ? 'bg-white' : ''
            } hover:cursor-pointer`} 
            onClick={() => handleSwitch(val)}
          >
            {val}
          </div>
        ))}
      </div>
      {renderMembers()}
    </div>
  )
}

export default Board