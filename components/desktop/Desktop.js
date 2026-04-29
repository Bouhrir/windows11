import React, { useState, useEffect } from 'react';

export default function Desktop() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden">
      <img
        src="/wallpaper.jpg"
        alt="Wallpaper"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-14 select-none">
        <p className="text-7xl sm:text-8xl font-light inter drop-shadow-lg tracking-tight">
          {formattedTime}
        </p>
        <p className="text-base sm:text-lg mt-2 opacity-80 inter font-light drop-shadow">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}
