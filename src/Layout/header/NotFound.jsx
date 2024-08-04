import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';


const NotFound = () => {
  const { searchQuery } = useParams();
  const { darkMode } = useDarkMode();


  return (
    <div className="flex flex-col items-center p-10 mt-6 gap-5">
      <h1 className="text-5xl font-bold text-red-500">Not Found</h1>
      <p className={`text-2xl m-4  ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        No results found for <span className="font-bold underline">{searchQuery}</span>
      </p>
      <Link to="/" className="text-xl marker:mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
