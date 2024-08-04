// src/components/LoadingAnimation.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimationBlack.json';

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center h-screen mt-20 pt-20">
      <div className="w-32 h-32">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
