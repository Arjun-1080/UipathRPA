

function Home() {
  return (
    <div className="h-[calc(100vh-70px)] relative flex flex-col justify-start items-center gap-0 overflow-x-hidden">
       <img
        src="/icons/gear.svg"
        alt=""
        className="h-[65vh] w-[65vh] opacity-[20%] absolute z-[0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
       />
    

      <img
        src="/icons/upper.svg"
        alt=""
        className="opacity-[20%] leading-none z-[10] pt-[15px] scale-[0.9]"
      />
      <div className="text-center pt-6">
        <h1 className="text-[--secondary] font-semibold text-[50px] z-[10] -mt-4">
          INNOVATE
        </h1>
        <h1 className="font-source text-[--primary] text-[55px] z-[10] -mt-4">
          AUTOMATE
        </h1>
        <h1 className="text-[--secondary] font-semibold text-[50px] z-[10] -mt-4">
          LEAD
        </h1>
      </div>
      <button className="bg-[--primary] px-5 py-2 rounded text-[--ternary] mt-5">
        Join Us Today
      </button>
      <img
        src="/icons/lower.svg"
        alt=""
        className="opacity-[20%] z-[10] -mt-4 scale-[0.9] pt-[30px]"
      />
      <img
        src="/icons/humanhand.svg"
        alt=""
        className="opacity-[20%] absolute -translate-x-[-130%] -translate-y-[-80px] scale-[1.2]"
      />
      <img
        src="/icons/robohand.svg"
        alt=""
        className="opacity-[20%] absolute -translate-x-[130%] -translate-y-[-100px] scale-[1.2]"
      />
    </div>
  );
}

export default Home;
