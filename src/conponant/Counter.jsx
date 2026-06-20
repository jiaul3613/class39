//import countdown from 'react-countdown';

const Counter = () => {
    
    return (
        <>
        <div className=" flex gap-6 items-center justify-center mt-15">
            <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
                <h2 className="text-[40px] font-bold leading-none">200</h2>
                <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Days</h3>
            </div>
            <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
                <h2 className="text-[40px] font-bold leading-none">08</h2>
                <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Hours</h3>
            </div>
            <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
                <h2 className="text-[40px] font-bold leading-none">13</h2>
                <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Minutes</h3>
            </div>
            <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
                <h2 className="text-[40px] font-bold leading-none">14</h2>
                <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Seconds</h3>
            </div>
        </div>
      </>
    );
  };

export default Counter