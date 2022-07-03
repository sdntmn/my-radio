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

  console.log(isLevelVolume);

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

<input
  value={isVolume}
  type='range'
  step='0.01'
  min='0'
  max='1'
  className='levelVolume'
  onChange={(e) => onScrub(e.target.value)}
  // onMouseUp={onScrubEnd}
  // onKeyUp={onScrubEnd}
  // style={{ background: trackStyling }}
/>;
