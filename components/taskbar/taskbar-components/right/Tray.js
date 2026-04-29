import React, { useState, useEffect } from "react";
import {
  ChevronUpIcon,
  MoonIcon,
  VolumeOffIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import TrayItems from "./right-components/TrayItems";

export default function Tray() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateStr = now.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="absolute right-0 flex items-center h-12 mr-1">
      {/* Chevron / notification area expand */}
      <ChevronUpIcon className="w-5 h-10 px-0.5 stroke-[1.5] opacity-75 hover:bg-white/10 rounded cursor-pointer transition-colors" />
      {/* Quick-settings cluster */}
      <div className="relative flex items-center space-x-1.5 px-2 py-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer select-none group">
        <WifiIcon className="w-4 stroke-[2] opacity-90" />
        <VolumeOffIcon className="w-4 stroke-[2] opacity-90" />
        {/* Battery icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-white opacity-90"
          viewBox="0 0 16 16"
        >
          <path d="M2 6h5v4H2V6z" />
          <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
        </svg>
        <TrayItems />
      </div>
      {/* Clock + Date */}
      <div className="flex flex-col items-end justify-center px-2 py-1 rounded hover:bg-white/10 transition-colors cursor-pointer select-none mr-1">
        <p className="text-xs leading-tight font-normal">{timeStr}</p>
        <p className="text-xs leading-tight opacity-80">{dateStr}</p>
      </div>
      {/* DND */}
      <MoonIcon className="w-5 h-10 px-0.5 stroke-[1.5] opacity-75 hover:bg-white/10 rounded cursor-pointer transition-colors -rotate-90 mr-1" />
    </div>
  );
}
