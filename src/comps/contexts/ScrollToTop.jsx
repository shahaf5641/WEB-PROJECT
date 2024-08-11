import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 
/**
 * ScrollToTop component scrolls the window to the top whenever the route changes.
 * It uses the useLocation hook to detect the current pathname and triggers
 * scrolling to the top when the pathname changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 
  return null;
};
 
export default ScrollToTop;