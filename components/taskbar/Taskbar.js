import React from 'react';
import Icons from './taskbar-components/center/Icons';
import Tray from './taskbar-components/right/Tray';
import Weather from './taskbar-components/widget/Weather';

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 w-full bg-black/70 backdrop-blur-2xl border-t border-white/5 flex items-center h-12 px-2 z-50">
        <Weather />
        <Icons />
        <Tray />
    </div>
  );
}