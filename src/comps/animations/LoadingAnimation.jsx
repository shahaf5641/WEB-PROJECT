// src/components/LoadingAnimation.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimationBlack.json';
 
/**
 * LoadingAnimation component displays a full-screen centered loading animation.
 * The animation is rendered using Lottie and loops continuously.
 */
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