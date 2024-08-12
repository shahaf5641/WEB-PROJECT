import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimationBlack.json';
import { loadingContainerStyle, lottieContainerStyle } from '../contexts/style'; // Import the styles

/**
 * LoadingAnimation component displays a full-screen centered loading animation.
 * The animation is rendered using Lottie and loops continuously.
 */
const LoadingAnimation = () => {
  return (
    <div className={loadingContainerStyle}>
      <div className={lottieContainerStyle}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
