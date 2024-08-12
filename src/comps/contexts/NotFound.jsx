import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import { NotFoundButton } from './style';

const NotFound = () => {
  // Retrieve search query from URL parameters
  const { searchQuery } = useParams();
  
  // Get dark mode status from context
  const { darkMode } = useDarkMode();

  return (
    <div className="flex flex-col items-center p-10 mt-6 gap-5">
      {/* Display main title */}
      <h1 className="text-5xl font-bold text-red-500">Not Found</h1>
      
      {/* Show a message with the search query */}
      <p className="text-2xl m-4">
        No results found for <span className="font-bold underline">{searchQuery}</span>
      </p>
      
      {/* Link to go back to the home page, styled based on dark mode */}
      <Link to="/" className={NotFoundButton(darkMode)}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
