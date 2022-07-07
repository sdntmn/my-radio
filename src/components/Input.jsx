import React from "react";

const InputRange = ({ children }) => {
  return (
    <>
      <input
        type='range'
        name='range'
        min='0'
        max='100'
        step='1'
        value='50'
        list='tickmarks'
        readOnly
        defaultValue>
        {children}
      </input>
    </>
  );
};

export default InputRange;
