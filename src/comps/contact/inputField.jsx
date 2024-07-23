import React from 'react';

const InputField = ({ id, label, type, value, onChange, required }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-gray-700 text-lg">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
