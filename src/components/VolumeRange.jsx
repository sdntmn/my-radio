import React, { useState } from "react";

const VolumeRange = ({ audioElement }) => {
  const [isLevelVolume, setIsLevelVolume] = useState(0.7);
  audioElement.volume = isLevelVolume;

  const step = 0.1;

  const onScrub = (value) => {
    audioElement.volume = value;
    setIsLevelVolume(audioElement.volume);
  };

  const incrementVolume = () => {
    audioElement.volume = isLevelVolume;
    if (isLevelVolume < 0.9) {
      setIsLevelVolume(audioElement.volume + step);
    } else {
      setIsLevelVolume(1);
    }
  };

  const decrementVolume = () => {
    audioElement.volume = isLevelVolume;

    if (isLevelVolume < 0.2) {
      setIsLevelVolume(0);
    } else {
      setIsLevelVolume(audioElement.volume - step);
    }
  };

  const element = (
    <input
      id='range'
      type='range'
      name='range'
      step='0.01'
      min='0'
      max='1'
      value={isLevelVolume}
      onChange={(e) => onScrub(e.target.value)}
    />
  );
  return (
    <>
      <div className='levelVolume'>
        <button aria-label='volume +' type='button' onClick={incrementVolume}>
          +
        </button>
        <span></span>
        <button aria-label='volume -' type='button' onClick={decrementVolume}>
          -
        </button>
        <h4 className='levelVolume__title'>Уровень громкости</h4>
        {/* <input
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
        /> */}
        <div class='range-wrap'>
          <div class='range-slider'>{element}</div>
        </div>
      </div>
    </>
  );
};

export default VolumeRange;
