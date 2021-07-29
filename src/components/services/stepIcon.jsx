import React from 'react';

const Icon = ({ img, text }) => {
  return (
    <>
      <div className="icon">
        <img src={img} alt="icon" />
        <h5>{text}</h5>
      </div>
    </>
  );
};

export default Icon;
