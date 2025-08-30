import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

export default function SportsWidget() {
  return (
    <div className="w-[400px] bg-green-900/80 h-auto rounded p-4">
      {/* Header */}
      <div className="flex relative">
        <div className="w-4 h-4 mr-3 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">⚽</span>
        </div>
        <p className="opacity-90 text-white font-medium">Botola Pro League</p>
        <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0 text-white opacity-70" />
      </div>

      {/* Match info */}
      <div className="flex mt-4 relative">
        {/* Team 1 */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-black text-xs font-bold">MAS</span>
          </div>
          <div className="text-sm ml-1 text-white">
            <p className="font-medium">Maghreb de Fès</p>
            <p className="text-xs opacity-80">1</p>
          </div>
        </div>

        {/* Match status */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xs text-white opacity-70">63&apos;</p>
          <p className="text-xs text-green-400 font-medium">Live</p>
        </div>

        {/* Team 2 */}
        <div className="flex items-center absolute right-0">
          <div className="text-sm mr-1 text-white text-right">
            <p className="font-medium">CODM Meknès</p>
            <p className="text-xs opacity-80">1</p>
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-black text-xs font-semibold">CODM</span>
          </div>
        </div>
      </div>

      {/* Match details */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-white opacity-70">Semi-Final • Leg 1</p>
        <p className="text-xs text-white opacity-70">Complexe Sportif de Fès</p>
      </div>

      {/* Extras */}
      <p className="text-sm mt-2 text-center text-cyan-300 opacity-90 hover:opacity-100 transition-all ease-in-out">
        <a
          href="https://m.elbotola.com/?lang=ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more matches
        </a>
      </p>
    </div>
  );
}