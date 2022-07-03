import React, { useState, useEffect, useCallback, useRef } from "react";

const SliderThumb = ({ audioElement }) => {
  const [isLevelVolume, setIsLevelVolume] = useState(0.7);
  audioElement.volume = isLevelVolume;

  const ref = useRef();

  // useEffect(() => {
  //   ref.current = 0;
  // }, []);

  console.log(ref);

  const element = (
    <>
      <input
        type='range'
        name='range'
        min='0'
        max='100'
        step='1'
        value='50'
        list='tickmarks'
      />
      <datalist id='tickmarks'>
        <option value='0'></option>
        <option value='10'></option>
        <option value='20'></option>
        <option value='30'></option>
        <option value='40'></option>
        <option value='50' label='50%'></option>
        <option value='60'></option>
        <option value='70'></option>
        <option value='80'></option>
        <option value='90'></option>
        <option value='100'></option>
      </datalist>
    </>
  );

  console.log(ref.current);

  const step = 10;
  const tick = step;
  const min = +element.min || 0;
  const max = +element.max || 100;
  console.log(min);

  let content = [];

  // let tick1 = (
  //   <span className='range-tick'>
  //     <span className='range-tick-text'>10</span>
  //   </span>
  // );

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

  let ticks = (
    <div className='range-ticks'>
      <div className='range'>{tickStep}</div>
    </div>
  );

  let dataRange = <div className='data-range'></div>;
  console.log(content);
  console.log(tickStep);

  // element.append(dataRange, ...addTicks());
  console.log(element);

  const onScrub = (value) => {
    audioElement.volume = value;
    setIsLevelVolume(audioElement.volume);
  };

  // function addTicks() {
  //   let wrap = <div className='range'></div>;

  //   element.parentElement.insertBefore(wrap, element);
  //   wrap.appendChild(element);
  //   let ticks = <div className='range-ticks'></div>;
  // }

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
  return (
    <>
      <div className='levelVolume'>
        <div className='label-range'>Громкость</div>
        <div className='range-wrap'>
          <div className='range-slider'>
            {ticks}
            {element}
            {dataRange}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderThumb;
