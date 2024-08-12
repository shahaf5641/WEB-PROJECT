// src/components/TextArea.jsx

import React from 'react';
import { textAreaStyle } from '../contexts/style'; // Import the style

/**
 * TextArea component renders a labeled textarea input.
 * 
 * @param {string} id - The unique identifier for the textarea element.
 * @param {string} label - The label text displayed above the textarea.
 * @param {string} value - The current value of the textarea.
 * @param {function} onChange - The function to handle changes in the textarea's value.
 * @param {boolean} required - Indicates if the textarea is required.
 * @param {boolean} darkMode - Boolean indicating if dark mode is enabled.
 */
const TextArea = ({ id, label, value, onChange, required, darkMode }) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor={id} className="block text-lg">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        placeholder="Enter your message"
        className={textAreaStyle(darkMode)}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
