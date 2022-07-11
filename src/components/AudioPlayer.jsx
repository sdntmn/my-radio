import React, { useEffect, useState } from "react";

const AudioPlayer = ({ name, img }) => {
  const [like, setLike] = useState(false);
  const cardStyleFavorite = ` ${
    like ? "card__button-is-favorite-size " : "card__button-is-notFavorite"
  }`;
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
        <button type='button' className={cardStyleFavorite}></button>
      </div>
    </>
  );
};

export default AudioPlayer;
