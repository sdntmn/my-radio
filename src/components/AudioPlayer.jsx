import React from "react";

const AudioPlayer = ({ name, img }) => {
  return (
    <>
      <div className='radioPlayer'>
        <div className='radioPlayer__info'>
          <img
            className='radioPlayer__img'
            src={img}
            alt={`track artwork for ${name}`}
          />
          <h2 className='radioPlayer__title'>{name}</h2>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
