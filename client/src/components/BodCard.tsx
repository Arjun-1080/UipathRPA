import React from 'react'

function BodCard({data} : any) {
  return (
    <div className='h-[300px] w-[250px] bg-white p-3 relative flex items-end rounded-md '>
        <div className='bg-[--ternary] px-2 py-1 w-full rounded-sm flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-[18px]'>{data.name}</h1>
          <h1 className='font-light text-[15px]'>{data.role}</h1>
        </div>
    </div>
  )
}

export default BodCard