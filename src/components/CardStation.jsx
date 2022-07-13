import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const CardStation = ({ card, setRadioIndex, listFavorites }) => {
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const favorite = listFavorites.includes(card.id);
  //   setLike(favorite);
  // }, [card.id, listFavorites]);

  const { index, img, name } = card;

  const cardStyleFavorite = ` ${
    like ? "card__button-is-favorite" : " card__button"
  }`;

  function handleClick() {
    setRadioIndex(index);
  }

  return (
    <>
      <Link to='' onClick={handleClick} style={{ textDecoration: "none" }}>
        <li className='cards__item card '>
          <img className='card__img' src={img} alt='#' />
          <h4 className='card__title'>{name}</h4>
          <button type='button' className={cardStyleFavorite}></button>
        </li>
      </Link>
    </>
  );
};

export default CardStation;
