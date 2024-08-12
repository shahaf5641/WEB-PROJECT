import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import {
  cryptoCardInner,
  cryptoCardFront,
  cryptoCardBack,
  cryptoCardImage,
  cryptoCardTitle,
  cryptoCardDescription,
  moreDetailsButton,
  svgIconStyle,
  svgPathStyle,
  svgContainerStyle,
  cryptoCardContentStyle,
  cryptoCardContentBackStyle
} from '../contexts/style';

/**
 * CryptoCard component displays a 3D flipping card with cryptocurrency details.
 * Props:
 * - imgSrc (string): Image source for the cryptocurrency logo.
 * - title (string): The name of the cryptocurrency.
 * - description (string): A brief description of the cryptocurrency.
 * - address (string): The address of the cryptocurrency, used for navigation to the details page.
 */
export default function CryptoCard({ imgSrc, title, description, address }) {
  
  // Access dark mode state from context
  const { darkMode } = useDarkMode();
  
  // Enables navigation between pages
  const navigate = useNavigate();
  
  // Function to handle the "More Details" button click
  const handleMoreDetails = () => {
    navigate(`/token/${address}`);
  };

  return (
    <div className='group perspective'>
      {/* Front of the card */}
      <div className={cryptoCardInner}>
        <div className={cryptoCardFront(darkMode)}>
          <div className={cryptoCardContentStyle}>
            <img src={imgSrc} alt={`${title} Logo`} className={cryptoCardImage} />
            <h3 className={cryptoCardTitle(darkMode)}>{title}</h3>
          </div>
        </div>

        {/* Back of the card */}
        <div className={cryptoCardBack}>
          <div className={cryptoCardContentBackStyle}>
            <h3 className={cryptoCardTitle(darkMode)}>{title}</h3>
            <p className={cryptoCardDescription}>{description}</p>
            <button 
              onClick={handleMoreDetails}
              className={moreDetailsButton(darkMode)}
            >
              More Details
              <svg className={svgIconStyle} {...svgContainerStyle}>
                <path d={svgPathStyle} strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
