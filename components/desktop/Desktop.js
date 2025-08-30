import React, { useState, useEffect } from 'react';

export default function Desktop() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col">
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 text-8xl mt-9 inter">
          {time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}:{time.getSeconds().toString().padStart(2, '0')}
        </p>
        <img src="/wallpaper.jpg" alt="Wallpaper" className="h-auto w-full object-cover" />
      </div>
    </div>
  );
}