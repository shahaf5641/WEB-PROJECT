import React from 'react';
import { Link } from 'react-router-dom';
import { tokenButtonStyle, tokenLinkStyle, tokenButtonInnerStyle } from '../../contexts/style'; 

/**
 * TokenLink component renders a button linking to the given URL.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.url - URL to link to.
 * @param {string} props.label - Label for the button.
 * @param {boolean} props.darkMode - Whether dark mode is enabled.
 */
const TokenLink = ({ url, label, darkMode }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer" className={tokenLinkStyle}>
      <div className={tokenButtonStyle(darkMode)}>
        <button className={tokenButtonInnerStyle}>
          <span>{label}</span>
        </button>
      </div>
    </Link>
  );
};

export default TokenLink;
