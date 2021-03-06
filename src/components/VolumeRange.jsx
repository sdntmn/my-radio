import React, { useState, useEffect } from "react";
import ButtonVolume from "./ButtonVolume";
import SliderVolume from "./SliderVolume";

const VolumeRange = ({ audioElement }) => {
  const [isLevelVolume, setIsLevelVolume] = useState(audioElement.value);

  const [isOnMouseDown, setIsOnMouseDown] = useState(false);
  const [isIdButton, setIsIdButton] = useState("");
  const stepVolume = audioElement.step;

  const onMouseDown = (id) => {
    setIsIdButton(id);
    setIsOnMouseDown(true);
  };

  const onMouseUp = () => {
    setIsOnMouseDown(false);
  };

  useEffect(() => {
    audioElement.volume = isLevelVolume;
    if (isOnMouseDown) {
      if (isIdButton === "decrementButton") {
        if (isLevelVolume <= stepVolume) {
          setIsLevelVolume(0);
        } else {
          setTimeout(
            () => setIsLevelVolume(audioElement.volume - stepVolume),
            50
          );
        }
      }
      if (isIdButton === "incrementButton") {
        if (isLevelVolume < 0.99) {
          setTimeout(
            () => setIsLevelVolume(audioElement.volume + stepVolume),
            50
          );
        } else {
          setIsLevelVolume(1);
        }
      }
    }
  }, [audioElement, isIdButton, isLevelVolume, isOnMouseDown, stepVolume]);

  return (
    <>
      <h3 className='main__levelVolume-title'> Уровень громкости</h3>
      <div className='levelVolume'>
        <ButtonVolume
          id='decrementButton'
          aLabel='volume -'
          textButton='-'
          onMouseClickDown={onMouseDown}
          onMouseClickUp={onMouseUp}
          className='levelVolume__down'
        />

        <SliderVolume
          audioElement={audioElement}
          stepVolume={stepVolume}
          isLevelVolume={isLevelVolume}
          setIsLevelVolume={setIsLevelVolume}
        />
        <ButtonVolume
          id='incrementButton'
          aLabel='volume +'
          textButton='+'
          onMouseClickDown={onMouseDown}
          onMouseClickUp={onMouseUp}
          className='levelVolume__up'
        />
      </div>
    </>
  );
};

export default VolumeRange;

/* <input
          value={isLevelVolume}
          type='range'
          step='0.01'
          min='0'
          max='1'
          className='levelVolume'
          onChange={(e) => onScrub(e.target.value)}
          // onMouseUp={onScrubEnd}
          // onKeyUp={onScrubEnd}
          // style={{ background: trackStyling }}
        /> */
