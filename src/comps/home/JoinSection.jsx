import React from 'react';
import { joinSectionHeading, joinSectionDescription } from '../contexts/style'; // Import styles

/**
 * JoinSection component
 * 
 * Displays a call-to-action section inviting users to join the cryptocurrency revolution.
 * It features a heading and a description, centered on the page.
 */
export default function JoinSection() {
  return (
    <div className='text-center'>
      <h2 className={joinSectionHeading}>Join the Crypto Revolution</h2>
      <p className={joinSectionDescription}>
        Stay updated with the latest news and trends in the cryptocurrency world
      </p>
    </div>
  );
}
