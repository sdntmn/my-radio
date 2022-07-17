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
  tracks,
}) => {
  // есть id в списке избранное
  useEffect(() => {
    let favorite = listFavorites.includes(tracksId) || false;
    setLike(favorite);
  }, [listFavorites, setLike, tracksId]);

  const cardStyleFavorite = ` ${
    tracks.like || isLike
      ? "card__button-is-favorite-size "
      : "card__button-is-notFavorite"
  }`;

  const onClick = () => {
    const likes = listFavorites.includes(tracksId);
    setLike(likes);
    if (!isLike) {
      setLike(!tracks.like);
      addFavorite([...listFavorites, tracksId]);
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

export default AudioPlayer;
