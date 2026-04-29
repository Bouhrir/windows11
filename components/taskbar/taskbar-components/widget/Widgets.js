import { SearchIcon } from "@heroicons/react/outline";
import { PlusIcon, UserIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import SportsWidget from "./widget-components/SportsWidget";
import StockWidget from "./widget-components/StockWidget";
import TodoWidget from "./widget-components/TodoWidget";

export default function Widgets() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden group-hover:flex flex-col w-[680px] max-h-[80vh] bg-zinc-900/95 backdrop-blur-2xl absolute left-0 bottom-[calc(100%+8px)] rounded-xl ring-1 ring-white/10 shadow-2xl text-gray-200 fadein z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <p className="text-2xl font-light">
          {String(now.getHours()).padStart(2, "0")}:{String(now.getMinutes()).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 rounded-full bg-zinc-200 flex justify-center items-center">
            <UserIcon className="w-5 fill-zinc-700" />
          </div>
          <div className="h-8 px-3 bg-white/10 hover:bg-white/20 transition-colors rounded-md flex items-center gap-x-1.5 cursor-pointer">
            <PlusIcon className="w-4" />
            <span className="text-xs">Add widgets</span>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mx-5 mb-4">
        <div className="w-full h-9 bg-white/10 hover:bg-white/15 transition-colors rounded-lg flex items-center px-3 gap-x-2">
          <SearchIcon className="w-4 opacity-60 flex-shrink-0" />
          <input
            type="text"
            className="h-full bg-transparent w-full outline-none text-sm placeholder-white/50"
            placeholder="Search the web"
          />
        </div>
      </div>
      {/* Widgets grid */}
      <div className="px-5 pb-5 overflow-y-auto flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          <SportsWidget />
          <StockWidget />
        </div>
        <TodoWidget />
      </div>
    </div>
  );
}
