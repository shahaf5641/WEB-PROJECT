import React from 'react';
 
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
      <label htmlFor={id} className={`block ${darkMode ? 'text-gray-200' : 'text-gray-700'} text-lg`}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        placeholder="Enter your message"
        className={`mt-1 rounded-2xl transition ease-in-out duration-300 cursor-pointer w-full block px-4 py-3 ${darkMode ? 'bg-gray-500 text-white focus:border-indigo-700' : 'bg-white text-black focus:border-gray-400'} border border-gray-300 rounded-md shadow-sm focus:outline-none text-lg`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
 
export default TextArea;