import React from "react";

export default function Icon({ name, title }) {
  return (
    <div className="relative flex items-center justify-center group">
      <div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/10 active:bg-white/20 transition-all duration-150 select-none cursor-pointer p-1.5">
        <img src={`/icons/${name}.png`} alt={title} className="w-full h-full object-contain" />
      </div>
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-800/95 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 fadein shadow-lg">
        {title}
      </div>
    </div>
  );
}
