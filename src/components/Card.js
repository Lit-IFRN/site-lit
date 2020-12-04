import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-6 rounded-lg flex flex-col items-center border border-solid bg-gray-50 border-gray-400 ${className}`}
    
  >
    {children}
  </div>
);

export default Card;
