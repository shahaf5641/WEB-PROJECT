import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../comps/contexts/DarkModeContext';
import { navLinkStyle, navLinkSpanStyle, navLinkTextStyle } from '../../comps/contexts/style'; // Import styles

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { darkMode } = useDarkMode();

  return (
    <Link 
      to={to} 
      className={navLinkStyle(darkMode, isActive)}
    >
      <span 
        className={navLinkSpanStyle(darkMode, isActive)}
      ></span>
      <span className={navLinkTextStyle(isActive)}>
        {children}
      </span>
    </Link>
  );
}
