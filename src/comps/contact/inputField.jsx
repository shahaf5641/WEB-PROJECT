import React from 'react';
import { inputFieldStyle, requiredIndicatorStyle, labelStyle } from '../contexts/style'; // Import the style

/**
 * InputField component renders a labeled input field.
 * 
 * @param {string} id - The unique identifier for the input element.
 * @param {string} label - The label text displayed above the input field.
 * @param {string} type - The type of the input element (text, email...).
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - The function to handle changes in the input field's value.
 * @param {boolean} required - Indicates if the input field is required.
 * @param {boolean} darkMode - Boolean indicating if dark mode is enabled.
 */
const InputField = ({ id, label, type, value, onChange, required, darkMode }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className={labelStyle}>
        {label}
        {required && <span className={requiredIndicatorStyle}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={inputFieldStyle(darkMode)}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
