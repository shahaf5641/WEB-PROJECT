// src/comps/Layout.jsx
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { DarkModeProvider, useDarkMode } from '../comps/contexts/DarkModeContext';
import DarkLightToggle from '../comps/contexts/DarkLightToggle';
import { layoutContainerStyle, layoutBackgroundStyle, mainContentStyle } from '../comps/contexts/style'; // Import styles

function LayoutContent({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={layoutContainerStyle(darkMode)}
      style={layoutBackgroundStyle(darkMode)}
    >
      <Header />
      <DarkLightToggle />
      <main className={mainContentStyle}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <DarkModeProvider>
      <LayoutContent>{children}</LayoutContent>
    </DarkModeProvider>
  );
}
