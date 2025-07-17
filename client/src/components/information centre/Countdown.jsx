import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Get or create target date - this ensures the same target across refreshes
    const getTargetDate = () => {
      // Try to get existing target date from session storage
      const stored = sessionStorage.getItem('countdownTarget');
      if (stored) {
        return new Date(parseInt(stored));
      }
      
      // If no stored date, create new target date
      const now = new Date();
      const target = new Date(now.getTime() + 
        (42 * 24 * 60 * 60 * 1000) + // 42 days
        (10 * 60 * 60 * 1000) +      // 10 hours
        (13 * 60 * 1000) +           // 13 minutes
        (20 * 1000)                  // 20 seconds
      );
      
      // Store the target date in session storage
      sessionStorage.setItem('countdownTarget', target.getTime().toString());
      return target;
    };

    const targetDate = getTargetDate();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown has ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Set up interval
    const timer = setInterval(updateCountdown, 1000);

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