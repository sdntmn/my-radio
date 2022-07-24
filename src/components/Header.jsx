import React, { useState } from "react";
import { ReactComponent as Settings } from "../images/settings-icon(3).svg";
import logoPath from "../images/radioImg.jpg";
import Popup from "./Popup";
import ThemeApp from "./ThemeApp";

function Header({ togglePopup, isPopupOpen, closePopup }) {
  return (
    <header className='header page__section '>
      <img
        src={logoPath}
        alt='Логотип проекта Mesto'
        className='logo header__logo'
      />
      <button
        type='button'
        className='header__settings-icon button'
        aria-label='Settings'
        onClick={togglePopup}>
        <Settings />
      </button>
      <Popup isPopupOpen={isPopupOpen} togglePopup={togglePopup}>
        <ThemeApp />
      </Popup>
    </header>
  );
}

export default Header;
