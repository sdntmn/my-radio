import React, { useState, useEffect } from "react";

const VolumeRange = ({ audioElement }) => {
  const [isLevelVolume, setIsLevelVolume] = useState(0.7);
  const [isLeft, setIsLeft] = useState(0);
  const [isEm, setIsEm] = useState(0);
  audioElement.volume = isLevelVolume;

  const inputVolume = (
    <input
      id='range'
      type='range'
      name='range'
      step={0.01}
      min='0'
      max='1'
      value={isLevelVolume}
      onChange={(e) => onScrub(e.target.value)}
    />
  );
  const stepVolume = audioElement.step;
  const tick = 1;
  const min = +inputVolume.min * 100 || 0;
  const max = +inputVolume.max * 100 || 100;

  let content = [];

  const addTicks = () => {
    for (let t = min; t <= max; t += tick) {
      content.push(
        <span className='range-tick'>
          <span className='range-tick-text'>{t}</span>
        </span>
      );
    }
    return content;
  };

  const tickStep = addTicks().map((item, index) => (
    <span key={index} className='range-tick'>
      <span className='range-tick-text'>{item}</span>
    </span>
  ));

  useEffect(() => {
    const getRangePercent = () => {
      const relativeValue = isLevelVolume - min;
      const ticks = max - min;
      const percent = (relativeValue / ticks) * 100;
      setIsLeft(Math.round(percent * 100));
      setIsEm(Math.floor(percent * 3 * 100) / 100);
    };
    getRangePercent();
  }, [isLevelVolume, max, min]);

  const position = {
    position: "absolute",
    top: 0,
    left: `calc(${isLeft}% - ${isEm}em)`,
  };

  const onScrub = (value) => {
    audioElement.volume = value;
    setIsLevelVolume(audioElement.volume);
  };

  const incrementVolume = () => {
    audioElement.volume = isLevelVolume;
    if (isLevelVolume < 0.9) {
      setIsLevelVolume(audioElement.volume + stepVolume);
    } else {
      setIsLevelVolume(1);
    }
  };

  const decrementVolume = () => {
    audioElement.volume = isLevelVolume;

    if (isLevelVolume < 0.2) {
      setIsLevelVolume(0);
    } else {
      setIsLevelVolume(audioElement.volume - stepVolume);
    }
  };

  const lev = Math.round((Math.floor(isLevelVolume * 100) / 100) * 100);

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

        <div className='label-range'>Громкость</div>
        <div className='range-wrap'>
          <div className='range-slider'>
            <div className='range'>
              {inputVolume}
              <div className='data-range' style={position}>
                {lev}
              </div>
              <div className='range-ticks'>
                <div className='range'>{tickStep}</div>
              </div>
            </div>
          </div>
        </div>
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
