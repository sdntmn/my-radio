import React from "react";

const ButtonVolume = ({
  id,
  aLabel,
  textButton,
  onMouseClickDown,
  onMouseClickUp,
}) => {
  function handleClick() {
    onMouseClickDown(id);
  }
  return (
    <button
      id={id}
      aria-label={aLabel}
      type='button'
      onMouseDown={handleClick}
      onMouseUp={onMouseClickUp}>
      {textButton}
    </button>
  );
};

export default ButtonVolume;
