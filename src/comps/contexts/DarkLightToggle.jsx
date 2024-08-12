import React from 'react';
import { useDarkMode } from './DarkModeContext';
import {
  toggleSwitchStyle,
  sunIconStyle,
  moonIconStyle,
  sunIconPath,
  moonIconPath,
  containerStyle,
  darkLightlabelStyle
} from '../contexts/style'; // Import styles

/**
 * DarkLightToggle component provides a toggle switch to enable or disable dark mode.
 * The switch visually transitions between a sun and moon icon, with an animated slider.
 */
export default function DarkLightToggle() {
  const { toggleDarkMode } = useDarkMode();
 
  return (
    <div className={containerStyle}>
      <label className={darkLightlabelStyle}>
        <input
          className="peer hidden"
          id="toggle"
          type="checkbox"
          onChange={toggleDarkMode}
        />
        <div className={toggleSwitchStyle}></div>
        <svg
          className={sunIconStyle}
          height="0"
          width="100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={sunIconPath}></path>
        </svg>
        <svg
          className={moonIconStyle}
          height="512"
          width="512"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={moonIconPath}></path>
        </svg>
      </label>
    </div>
  );
}
