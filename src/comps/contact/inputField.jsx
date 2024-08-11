import React from 'react';
 
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
      <label htmlFor={id} className={`block ${darkMode ? 'text-gray-200' : 'text-gray-700'} text-lg`}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`mt-1 rounded-2xl transition ease-in-out duration-300 cursor-pointer w-full block px-4 py-3 ${darkMode ? 'bg-gray-500 text-white focus:border-indigo-700' : 'bg-white text-black focus:border-gray-500'} border border-gray-300 rounded-md shadow-sm focus:outline-none text-lg`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
 
export default InputField;