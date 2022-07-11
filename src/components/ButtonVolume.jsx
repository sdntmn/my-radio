import React from "react";

const ButtonVolume = ({
  id,
  aLabel,
  textButton,
  onMouseClickDown,
  onMouseClickUp,
  className,
}) => {
  function handleClick() {
    onMouseClickDown(id);
  }
  return (
    <button
      id={id}
      className={className}
      aria-label={aLabel}
      type='button'
      onMouseDown={handleClick}
      onMouseUp={onMouseClickUp}></button>
  );
};

export default ButtonVolume;
