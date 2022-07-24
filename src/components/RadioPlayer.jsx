import React, { useEffect } from "react";

const RadioPlayer = ({
  name,
  img,
  tracksId,
  listFavoriteId,
  addFavorite,
  isLike,
  setLike,
  addDataId,
  handleCardDelete,
  tracks,
}) => {
  // есть id в списке избранное
  useEffect(() => {
    const listFavoritesLet = listFavoriteId || [];
    function favorite() {
      return listFavoritesLet?.includes(tracksId);
    }
    setLike(favorite);
  }, [listFavoriteId, setLike, tracksId]);

  const cardStyleFavorite = ` ${
    tracks.like || isLike
      ? "card__button-is-favorite-size "
      : "card__button-is-notFavorite"
  }`;

  const listFavoritesLet = listFavoriteId || [];
  function favorite() {
    return listFavoritesLet?.includes(tracksId);
  }

  const onClick = () => {
    setLike(favorite);
    if (!isLike) {
      setLike(!tracks.like);
      addFavorite([...listFavoriteId, tracksId]);
      addDataId(tracksId);
    } else {
      setLike(!tracks.like);
      handleCardDelete(tracksId);
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

export default RadioPlayer;
