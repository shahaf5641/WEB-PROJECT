import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/SmallLoadingAnimation.json';

const SmallLoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex pt-[200px] justify-center bg-black bg-opacity-50 z-50">
      <div className="w-12 h-12">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default SmallLoadingAnimation;
