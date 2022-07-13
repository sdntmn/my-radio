import React, { useEffect } from "react";

const AudioPlayer = ({
  name,
  img,
  tracksId,
  listFavorites,
  addFavorite,
  isLike,
  setLike,
  addDataId,
  handleCardDelete,
  handleIndexDelete,
}) => {
  // есть id в списке избранное
  useEffect(() => {
    const favorite = listFavorites.includes(tracksId);
    setLike(favorite);
  }, [listFavorites, setLike, tracksId]);

  const cardStyleFavorite = ` ${
    isLike ? "card__button-is-favorite-size " : "card__button-is-notFavorite"
  }`;

  const onClick = () => {
    const favorite = listFavorites.includes(tracksId);
    setLike(favorite);
    if (!isLike) {
      setLike(true);
      addFavorite([...listFavorites, tracksId]);
      addDataId(tracksId);
      console.log();
    } else {
      console.log(tracksId);
      setLike(false);

      handleCardDelete(tracksId);
      handleIndexDelete(tracksId);
    }
  };

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
        <button
          type='button'
          className={cardStyleFavorite}
          onClick={onClick}></button>
      </div>
    </>
  );
};

export default AudioPlayer;
