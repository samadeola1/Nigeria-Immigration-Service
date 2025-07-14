import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 10,
    minutes: 13,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#E6F7EE] py-[100px] ">
      <div className="w-11/12 container mx-auto flex flex-col gap-[60px] lg:gap-[35px]">
       <div>
         <h1 className="text-center text-[28px] md:text-[36px] px-8 lg:text-[44px] font-bold lg:font-semibold text-gray-800 ">
          Track Your Regularization Deadline
        </h1>
       </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[100px] xl:gap-[186px] text-center ">
          <div className="flex flex-col items-center relative">
            <span className="countdown font-mono text-6xl md:text-7xl font-semibold text-gray-800">
              <span style={{"--value":timeLeft.days}} aria-live="polite" aria-label={`${timeLeft.days} days`}>{timeLeft.days}</span>
            </span>
            <span className="text-lg md:text-xl text-gray-600 mt-2">Days</span>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-20 bg-[#212121]"></div>
            <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#212121]"></div>
          </div>
          <div className="flex flex-col items-center relative">
            <span className="countdown font-mono text-6xl md:text-7xl font-semibold text-gray-800">
              <span style={{"--value":timeLeft.hours}} aria-live="polite" aria-label={`${timeLeft.hours} hours`}>{timeLeft.hours}</span>
            </span>
            <span className="text-lg md:text-xl text-gray-600 mt-2">Hours</span>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-20 bg-[#212121]"></div>
            <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#212121]"></div>
          </div>
          <div className="flex flex-col items-center relative">
            <span className="countdown font-mono text-6xl md:text-7xl font-semibold text-gray-800">
              <span style={{"--value":timeLeft.minutes}} aria-live="polite" aria-label={`${timeLeft.minutes} minutes`}>{timeLeft.minutes}</span>
            </span>
            <span className="text-lg md:text-xl text-gray-600 mt-2">Mins</span>
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-20 bg-[#212121]"></div>
            <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#212121]"></div>
          </div>
          <div className="relative flex flex-col items-center">
            <span className="countdown font-mono text-6xl md:text-7xl font-semibold text-gray-800">
              <span style={{"--value":timeLeft.seconds}} aria-live="polite" aria-label={`${timeLeft.seconds} seconds`}>{timeLeft.seconds}</span>
            </span>
            <span className="text-lg md:text-xl text-gray-600 mt-2">Secs</span>
             <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-20 bg-[#212121]"></div>
            <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#212121]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;