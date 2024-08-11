import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/SmallLoadingAnimation.json';
 
/**
 * SmallLoadingAnimation component displays a small loading animation
 * centered on the screen with a semi-transparent background overlay.
 * The animation uses Lottie for smooth looping.
 */
const SmallLoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex pt-[200px] justify-center rounded-xl bg-black bg-opacity-30 z-50">
      <div className="w-12 h-12">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};
 
export default SmallLoadingAnimation;