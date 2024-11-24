
interface BodCardProps {
  data: {
    name: string;
    role: string;
    url: string;
  }
}

function BodCard({ data }: BodCardProps) {
  return (
    <div 
      className='h-[300px] w-[250px] bg-white relative flex items-end rounded-md overflow-hidden shadow-md'
    >
      {/* Optional: If you still want to use an image */}
      <div 
        className='absolute inset-0'
        style={{
          // backgroundImage: `url(${data.url || '/bod/no_bg.png'})`,
          backgroundSize: '500px 500px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Card content */}
      <div className='w-full z-10'>
        <div className='bg-[--ternary] px-4 py-2 m-3 rounded-md'>
          <h1 className='font-semibold text-[18px] text-center'>{data.name}</h1>
          <h2 className='font-light text-[15px] text-center'>{data.role}</h2>
        </div>
      </div>
    </div>
  )
}

export default BodCard