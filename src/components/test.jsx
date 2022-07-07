import React, { useState, useEffect, useMemo } from "react";
import AudioPlayer from "../components/AudioPlayer";
import AudioControls from "../components/AudioControls";
import Favorites from "../components/Favorites";
import RadioList from "../components/RadioList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Main({ tracks }) {
  const [radioIndex, setRadioIndex] = useState(0);
  const [listRadio, setListRadio] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReadyToPlay, setIsReadyToPlay] = useState();
  const { name, img, url } = tracks[radioIndex];

  const audioElement = useMemo(() => new Audio(url), [url]);
  audioElement.preload = "none";

  // Регулирование громкости
  const [isLevelVolume, setIsLevelVolume] = useState(0.7);
  const step = 0.1;

  console.log(isReadyToPlay);

  const incrementVolume = () => {
    audioElement.volume = isLevelVolume;
    if (isLevelVolume < 0.9) {
      setIsLevelVolume(audioElement.volume + step);
    } else {
      setIsLevelVolume(1);
    }
  };

  // const onScrub = (value) => {
  //   audioElement.volume = value;
  //   setIsLevelVolume(audioElement.volume);
  // };

  const decrementVolume = () => {
    audioElement.volume = isLevelVolume;

    if (isLevelVolume < 0.2) {
      setIsLevelVolume(0);
    } else {
      setIsLevelVolume(audioElement.volume - step);
    }
  };

  //Свойство указывает состояние готовности носителя.
  const readyToPlay = audioElement.readyState;

  useEffect(() => {
    if (listRadio.length < 1) {
      setListRadio(tracks.map((item, i) => Object.assign(item, { index: i })));
    }
  }, [listRadio.length, radioIndex, tracks]);

  useEffect(() => {
    setIsReadyToPlay(readyToPlay);

    audioElement.load();
  }, [audioElement, readyToPlay]);

  function toPrevTrack() {
    if (radioIndex - 1 < 0) {
      setRadioIndex(tracks.length - 1);
    } else {
      setRadioIndex(radioIndex - 1);
    }
  }

  const toNextTrack = () => {
    if (radioIndex < tracks.length - 1) {
      setRadioIndex(radioIndex + 1);
    } else {
      setRadioIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying, audioElement, readyToPlay]);

  useEffect(() => {
    return () => {
      audioElement.pause();
    };
  }, [audioElement, url]);

  return (
    <>
      <div className='content page__section'>
        <Header />
        <RadioList tracks={tracks} setRadioIndex={setRadioIndex} />
        <section className='main'>
          <AudioPlayer radioIndex={radioIndex} name={name} img={img} />

          <AudioControls
            isPlaying={isPlaying}
            onPrev={toPrevTrack}
            onNext={toNextTrack}
            onPlayPause={setIsPlaying}
            radioIndex={radioIndex}
          />

          <button aria-label='volume +' type='button' onClick={incrementVolume}>
            +
          </button>
          <span></span>
          <button aria-label='volume -' type='button' onClick={decrementVolume}>
            -
          </button>
        </section>
        <Favorites />
        <Footer />
      </div>
    </>
  );
}

export default Main;

// {
//   /* <input
//   value={isVolume}
//   type='range'
//   step='0.01'
//   min='0'
//   max='1'
//   className='levelVolume'
//   onChange={onScrub}
//   // onMouseUp={onScrubEnd}
//   // onKeyUp={onScrubEnd}
//   // style={{ background: trackStyling }}
// />; */
// }

// import React, { useState, useEffect, useCallback, useRef } from "react";
// //import InputRange from "./Input";

// const SliderThumb = ({ audioElement }) => {
//   const [isLevelVolume, setIsLevelVolume] = useState(0);
//   audioElement.volume = isLevelVolume;
//   const onScrub = (value) => {
//     audioElement.volume = value;
//     setIsLevelVolume(audioElement.volume);
//   };

//   const element = (
//     <>
//       <input
//         type='range'
//         name='range'
//         min='0'
//         max='100'
//         step='1'
//         value='50'
//         list='tickmarks'
//       />
//     </>
//   );

//   const step = 10;
//   const tick = step;
//   const min = +element.min || 0;
//   const max = +element.max || 100;

//   let content = [];

//   const addTicks = () => {
//     for (let t = min; t <= max; t += tick) {
//       content.push(
//         <span className='range-tick'>
//           <span className='range-tick-text'>{t}</span>
//         </span>
//       );
//     }
//     return content;
//   };
//   const tickStep = addTicks().map((item, index) => (
//     <span key={index} className='range-tick'>
//       <span className='range-tick-text'>{item}</span>
//     </span>
//   ));

//   let ticks = (
//     <div className='range-ticks'>
//       <div className='range'>{tickStep}</div>
//     </div>
//   );

//   const Component = () => {
//     // Here it's ReactElement
//     return <div className='data-range'></div>;
//   };

//   // Here it's ReactNode

//   const incrementVolume = () => {
//     audioElement.volume = isLevelVolume;
//     if (isLevelVolume < 0.9) {
//       setIsLevelVolume(audioElement.volume + step);
//     } else {
//       setIsLevelVolume(1);
//     }
//   };

//   const decrementVolume = () => {
//     audioElement.volume = isLevelVolume;

//     if (isLevelVolume < 0.2) {
//       setIsLevelVolume(0);
//     } else {
//       setIsLevelVolume(audioElement.volume - step);
//     }
//   };
//   return (
//     <>
//       <div className='levelVolume'>
//         <div className='label-range'>Громкость</div>
//         <div className='range-wrap'>
//           <div class='range-slider'>
//             <div class='range'>
//               <input
//                 id='range'
//                 type='range'
//                 name='range'
//                 min='0'
//                 max='100'
//                 step='1'
//                 value={isLevelVolume}
//                 onChange={(e) => onScrub(e.target.value)}></input>

//               <div class='data-range'>{isLevelVolume}</div>
//               {ticks}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SliderThumb;
