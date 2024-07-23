import React from 'react';

const TextArea = ({ id, label, value, onChange, required }) => {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="block text-gray-700 text-lg">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={`Enter your ${label.toLowerCase()}...`}
        className="mt-1 block w-full px-4 py-3 h-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
