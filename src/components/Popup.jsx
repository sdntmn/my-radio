import { React, useEffect } from "react";
import { ReactComponent as ClosePopup } from "../images/icon_close.svg";

// const setActive = ({ isActive }) =>
//   isActive ? "popup__link-activ" : "popup__link";

const Popup = function ({ isPopupOpen = false, children, togglePopup }) {
  console.log(isPopupOpen);
  // // Закрытие по esc
  // useEffect(() => {
  //   const closeByEscape = (evt) => {
  //     if (evt.key === "Escape") {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("keydown", closeByEscape);
  //   return () => document.removeEventListener("keydown", closeByEscape);
  // }, [onClose]);

  const handlePopup = () => {
    togglePopup(!isPopupOpen);
  };

  return (
    <div className={`popup ${isPopupOpen && "popup__is-opened"}`}>
      <button
        type='button'
        className='button popup__icon-close'
        aria-label='Settings'
        onClick={handlePopup}>
        <ClosePopup />
      </button>
      {children}
    </div>
  );
};

export default Popup;
