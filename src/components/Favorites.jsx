import React from "react";
import CardStation from "./CardStation";

const Favorites = ({ listFavorite, setRadioIndex, handleCardDelete }) => {
  const card = listFavorite.map((item) => (
    <CardStation
      key={item.id}
      card={item}
      setRadioIndex={setRadioIndex}
      handleCardDelete={handleCardDelete}
    />
  ));
  return (
    <>
      <div className='radioList favorites'>
        <h3 className='radioList__title'>Избранное</h3>
        <ul className='favorites__direction radioList__items cards'>{card}</ul>
      </div>
    </>
  );
};

export default Favorites;
