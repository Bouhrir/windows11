import {
  ChevronRightIcon,
  CogIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PencilIcon,
  SunIcon,
  VolumeUpIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function TrayItems() {
  return (
    <div className="hidden group-hover:flex flex-col w-[360px] bg-zinc-900/95 backdrop-blur-2xl absolute right-0 bottom-[calc(100%+8px)] rounded-xl ring-1 ring-white/10 shadow-2xl p-4 fadein z-50 gap-y-3">
      {/* Toggle buttons row 1 */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        {/* WiFi */}
        <div className="flex flex-col items-start bg-sky-500/90 hover:bg-sky-400 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <div className="flex items-center justify-between w-full">
            <WifiIcon className="w-5 stroke-white stroke-[2]" />
            <ChevronRightIcon className="w-3.5 stroke-white stroke-[2] opacity-70" />
          </div>
          <p className="text-white font-medium leading-none">Wi-Fi</p>
          <p className="text-white/70 leading-none truncate w-full">Connected</p>
        </div>
        {/* Bluetooth */}
        <div className="flex flex-col items-start bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z" />
          </svg>
          <p className="text-white/90 font-medium leading-none">Bluetooth</p>
          <p className="text-white/50 leading-none">Off</p>
        </div>
        {/* Airplane mode */}
        <div className="flex flex-col items-start bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <PaperAirplaneIcon className="w-5 stroke-white/80" />
          <p className="text-white/90 font-medium leading-none">Airplane</p>
          <p className="text-white/50 leading-none">Off</p>
        </div>
        {/* Battery saver */}
        <div className="flex flex-col items-start bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white/80" viewBox="0 0 16 16">
            <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
            <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z" />
            <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
          </svg>
          <p className="text-white/90 font-medium leading-none">Battery</p>
          <p className="text-white/50 leading-none">Saver</p>
        </div>
        {/* Focus assist */}
        <div className="flex flex-col items-start bg-sky-500/90 hover:bg-sky-400 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <MoonIcon className="w-5 stroke-white stroke-[2] -rotate-90" />
          <p className="text-white font-medium leading-none">Focus</p>
          <p className="text-white/70 leading-none">Alarms only</p>
        </div>
        {/* Accessibility */}
        <div className="flex flex-col items-start bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 gap-y-1.5 cursor-pointer select-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white/80" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <p className="text-white/90 font-medium leading-none">Access-</p>
          <p className="text-white/50 leading-none">ibility</p>
        </div>
      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-y-3 mt-1">
        {/* Brightness */}
        <div className="flex items-center gap-x-3">
          <SunIcon className="w-4 opacity-75 flex-shrink-0" />
          <input
            type="range"
            defaultValue="75"
            className="w-full h-1.5 accent-sky-400 rounded-full cursor-pointer"
          />
        </div>
        {/* Volume */}
        <div className="flex items-center gap-x-3">
          <VolumeUpIcon className="w-4 opacity-75 flex-shrink-0" />
          <input
            type="range"
            defaultValue="55"
            className="w-full h-1.5 accent-sky-400 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
        <div className="flex items-center gap-x-1.5 text-xs opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-white" viewBox="0 0 16 16">
            <path d="M2 6h5v4H2V6z" />
            <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
          </svg>
          <span>55%</span>
        </div>
        <div className="flex gap-x-3 opacity-75">
          <PencilIcon className="w-4 hover:opacity-100 cursor-pointer transition-opacity" />
          <CogIcon className="w-4 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
      </div>
    </div>
  );
}
