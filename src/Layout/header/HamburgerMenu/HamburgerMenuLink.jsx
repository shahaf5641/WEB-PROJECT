import React from 'react';
import { Link } from 'react-router-dom';
import { hamburgerMenuLinkStyle } from '../../../comps/contexts/style';

/**
 * HamburgerMenuLink Component
 * 
 * This component is a reusable link used within the HamburgerMenu component.
 * It provides navigation to a specified route and applies a consistent style to all menu links.
 * 
 * Props:
 * - `to`: The target route for the link.
 * - `onClick`: A callback function to be executed when the link is clicked. Typically used to close the menu.
 * - `children`: The content to be displayed inside the link (e.g., link text).
 * 
 * The component uses:
 * - `Link` from `react-router-dom` for client-side navigation.
 * - `hamburgerMenuLinkStyle` from `style.js` for consistent styling of the links.
 */
const HamburgerMenuLink = ({ to, onClick, children }) => (
  <Link to={to} onClick={onClick} className={hamburgerMenuLinkStyle}>
    {children}
  </Link>
);

export default HamburgerMenuLink;
