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
    second: "2-digit",
    hour12: true, // Ensures AM/PM format
  });

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col">
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 text-8xl mt-9 inter">
			{formattedTime}
        </p>
        <img src="/wallpaper.jpg" alt="Wallpaper" className="h-auto w-full object-cover" />
      </div>
    </div>
  );
}