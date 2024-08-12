import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/SmallLoadingAnimation.json';
import { smallLoadingContainerStyle, lottieSmallContainerStyle } from '../contexts/style'; // Import the styles

/**
 * SmallLoadingAnimation component displays a small loading animation
 * centered on the screen with a semi-transparent background overlay.
 * The animation uses Lottie for smooth looping.
 */
const SmallLoadingAnimation = () => {
  return (
    <div className={smallLoadingContainerStyle}>
      <div className={lottieSmallContainerStyle}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default SmallLoadingAnimation;
