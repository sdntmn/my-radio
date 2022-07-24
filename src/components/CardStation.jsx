import React from "react";

import { Link } from "react-router-dom";
const CardStation = ({
  card,
  setRadioIndex,
  listFavorites,
  handleCardDelete,
}) => {
  const { index, img, name } = card;

  function handleClick() {
    setRadioIndex(index);
  }

  function handleDeleteClick() {
    handleCardDelete(card.id);
  }

  return (
    <>
      <li className='card '>
        <div className='card__link-wrap'>
          <Link to='' onClick={handleClick} className='card__link-img'>
            {" "}
            <img className='card__img' src={img} alt='#' />
          </Link>
          <Link to='' onClick={handleClick} className='card__link'>
            <h4 className='card__title'>{name}</h4>
          </Link>
        </div>

        {!!!listFavorites && (
          <button
            type='button'
            className='card__button-delete'
            onClick={handleDeleteClick}></button>
        )}
      </li>
    </>
  );
};

export default CardStation;
