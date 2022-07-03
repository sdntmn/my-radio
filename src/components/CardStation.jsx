import React from "react";
import { Link } from "react-router-dom";
const CardStation = ({ card, setRadioIndex }) => {
  const { index, img, name } = card;
  const cardLikeButtonClassName = `card__like-button `;

  function handleClick() {
    setRadioIndex(index);
  }

  return (
    <>
      <Link to='' onClick={handleClick} style={{ textDecoration: "none" }}>
        <li className='cards__item card '>
          <img className='card__img' src={img} alt='#' />
          <h4 className='card__title'>{name}</h4>
          <button type='button' className={cardLikeButtonClassName}></button>
        </li>
      </Link>
    </>
  );
};

export default CardStation;
