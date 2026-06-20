import { useState, useEffect } from "react";

const Counter = () => {
  // 1. Change this to your desired target date and time
  const TARGET_DATE = "2026-12-31T23:59:59";

  const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      // Format with leading zeros for visual consistency
      timeLeft = {
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex gap-6 items-center justify-center mt-15">
        {/* Days */}
        <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
          <h2 className="text-[40px] font-bold leading-none">{timeLeft.days}</h2>
          <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Days</h3>
        </div>
        
        {/* Hours */}
        <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
          <h2 className="text-[40px] font-bold leading-none">{timeLeft.hours}</h2>
          <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Hours</h3>
        </div>
        
        {/* Minutes */}
        <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
          <h2 className="text-[40px] font-bold leading-none">{timeLeft.minutes}</h2>
          <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Minutes</h3>
        </div>
        
        {/* Seconds */}
        <div className="flex flex-col items-center justify-center w-30 h-31.5 bg-white/10 backdrop-blur-md rounded-[20px] text-white p-4 text-center">
          <h2 className="text-[40px] font-bold leading-none">{timeLeft.seconds}</h2>
          <h3 className="text-sm font-medium tracking-wide mt-1 text-[16px]">Seconds</h3>
        </div>
      </div>
    </>
  );
};

export default Counter;