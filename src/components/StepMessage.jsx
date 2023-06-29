import React from 'react';

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h1>{step}</h1>
      {children}
    </div>
  );
}

export default StepMessage;
