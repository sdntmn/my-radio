import React, { useState, useEffect, useCallback, useRef } from "react";
//import InputRange from "./Input";

const SliderThumb = ({ audioElement }) => {
  // const [isLevelVolume, setIsLevelVolume] = useState(0.7);
  // const [isLeft, setIsLeft] = useState(0);
  // const [isEm, setIsEm] = useState(0);
  // audioElement.volume = isLevelVolume;
  // const onScrub = (value) => {
  //   audioElement.volume = value;
  //   setIsLevelVolume(audioElement.volume);
  // };
  // const elementInput = (
  //   <>
  //     <input
  //       type='range'
  //       name='range'
  //       min='0'
  //       max='1'
  //       step='0.01'
  //       value={isLevelVolume}
  //       onChange={(e) => onScrub(e.target.value)}
  //     />
  //   </>
  // );
  // const step = elementInput.step * 100;
  // const tick = step;
  // const min = +elementInput.min * 100 || 0;
  // const max = +elementInput.max * 100 || 100;
  // let content = [];
  // const addTicks = () => {
  //   for (let t = min; t <= max; t += tick) {
  //     content.push(
  //       <span className='range-tick'>
  //         <span className='range-tick-text'>{t}</span>
  //       </span>
  //     );
  //   }
  //   return content;
  // };
  // console.log(elementInput.step);
  // console.log(min);
  // const tickStep = addTicks().map((item, index) => (
  //   <span key={index} className='range-tick'>
  //     <span className='range-tick-text'>{item}</span>
  //   </span>
  // ));
  // useEffect(() => {
  //   const getRangePercent = () => {
  //     const relativeValue = isLevelVolume - min;
  //     const ticks = max - min;
  //     const percent = (relativeValue / ticks) * 100;
  //     setIsLeft(percent * 100);
  //     setIsEm(percent * 3);
  //   };
  //   getRangePercent();
  // }, [isLevelVolume, max, min]);
  // const position = {
  //   position: "absolute",
  //   top: 0,
  //   left: `calc(${isLeft}% - ${isEm}em)`,
  // };
  //   return (
  //     <>
  //       <div className='levelVolume'>
  //         <div className='label-range'>Громкость</div>
  //         <div className='range-wrap'>
  //           <div className='range-slider'>
  //             <div className='range'>
  //               {elementInput}
  //               <div className='data-range' style={position}>
  //                 {isLevelVolume * 100}
  //               </div>
  //               <div className='range-ticks'>
  //                 <div className='range'>{tickStep}</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
};

export default SliderThumb;

//  <input
//    id='range'
//    type='range'
//    name='range'
//    min='0'
//    max='100'
//    step='1'
//    value={isLevelVolume}
//    onChange={(e) => onScrub(e.target.value)}></input>;
