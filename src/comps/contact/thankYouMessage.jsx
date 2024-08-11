import React from 'react';

const ThankYouMessage = () => {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="backdrop-blur-md border-2 text-center text-3xl font-semibold p-6 rounded-xl max-w-4xl shadow-2xl">
        Thank you for writing to us, we will get back to you as soon as possible.
      </div>
    </div>
  );
};

export default ThankYouMessage;
