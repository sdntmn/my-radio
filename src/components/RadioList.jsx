import React from "react";
import CardStation from "./CardStation";

const RadioList = ({ tracks, setRadioIndex, like, listFavorites }) => {
  const card = tracks.map((item) => (
    <CardStation
      key={item.id}
      card={item}
      setRadioIndex={setRadioIndex}
      like={like}
      tracks={tracks}
      listFavorites={listFavorites}
    />
  ));
  return (
    <>
      <div className='radioList'>
        <h3 className='radioList__title'>Список радиостанций</h3>
        <ul className='radioList__items cards'>{card}</ul>
      </div>
    </>
  );
};

export default RadioList;
