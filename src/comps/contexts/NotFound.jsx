import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import { NotFoundButton, notFoundContainerStyle, notFoundHeadingStyle, notFoundMessageStyle, notFoundSearchQueryStyle } from './style';

const NotFound = () => {
  // Retrieve search query from URL parameters
  const { searchQuery } = useParams();
  
  // Get dark mode status from context
  const { darkMode } = useDarkMode();

  return (
    <div className={notFoundContainerStyle}>
      {/* Display main title */}
      <h1 className={notFoundHeadingStyle}>Not Found</h1>
      
      {/* Show a message with the search query */}
      <p className={notFoundMessageStyle}>
        No results found for <span className={notFoundSearchQueryStyle}>{searchQuery}</span>
      </p>
      
      {/* Link to go back to the home page, styled based on dark mode */}
      <Link to="/" className={NotFoundButton(darkMode)}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
