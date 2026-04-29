import React from "react";
import Widgets from "./Widgets";

export default function Weather() {
  return (
    <div className="ml-1 flex group items-center pl-2 pr-3 py-1 rounded hover:bg-white/10 transition-colors select-none cursor-pointer h-10 inter relative">
      <img src="/icons/sunny-cloud.png" alt="" className="w-6 h-6 flex-shrink-0" />
      <div className="ml-2">
        <p className="text-xs font-medium leading-tight">40°C</p>
        <p className="text-xs opacity-70 leading-tight">Cloudy</p>
      </div>
      <Widgets />
    </div>
  );
}
