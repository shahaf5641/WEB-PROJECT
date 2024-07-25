import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);

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
      color: 0xf5f5f5,
      backgroundColor: 0x8c8c8c,
      points: 16.00,
      maxDistance: 23.00,
      spacing: 19.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
