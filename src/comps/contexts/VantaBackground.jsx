import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import { useDarkMode } from './DarkModeContext';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: darkMode ? 0x1e3454 : 0xcbd9e8,
      backgroundColor: darkMode ? 0x10310 : 0x76a3d4,
      points: 16.00,
      maxDistance: 23.00,
      spacing: 19.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [darkMode]);

  return <div ref={vantaRef} style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
