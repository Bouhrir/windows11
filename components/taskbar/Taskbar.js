import React from 'react';
import Icons from './taskbar-components/center/Icons';
import Tray from './taskbar-components/right/Tray';
import Weather from './taskbar-components/widget/Weather';

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 w-full bg-[#030C1B] flex items-center justify-between h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 lg:px-12 gap-x-4 flex-wrap">
        <Weather />
        <Icons />
        <Tray />
    </div>
  );
}