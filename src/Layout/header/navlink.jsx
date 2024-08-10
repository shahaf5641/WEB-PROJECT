import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { darkMode } = useDarkMode();

  return (
    <Link 
      to={to} 
      className={`hidden md:flex font-bold relative group focus:outline-none py-1 transition duration-500 text-[17px] lg:text-[21px]
        ${isActive ? (darkMode ? 'text-indigo-500' : 'text-gray-700') : (darkMode ? 'text-gray-100' : 'text-gray-100')}
        ${darkMode ? 'hover:text-indigo-500' : 'hover:text-gray-700'}
      `}
    >
      <span 
        className={`absolute bottom-0 left-0 h-0.5 ${darkMode ? 'bg-indigo-500' : 'bg-gray-700'} transition-all duration-700 ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
      ></span>
      <span className={`transition-transform transform ${isActive ? 'scale-110' : ''} group-hover:scale-110`}>
        {children}
      </span>
    </Link>
  );
}
