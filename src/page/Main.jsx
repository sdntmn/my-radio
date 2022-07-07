import React, { useState, useEffect, useMemo } from "react";
import AudioPlayer from "../components/AudioPlayer";
import AudioControls from "../components/AudioControls";
import Favorites from "../components/Favorites";
import RadioList from "../components/RadioList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VolumeRange from "../components/VolumeRange";
import SliderThumb from "../components/SliderThumb";
//import AudioVisualizer from "../components/AudioVisualizer";

function Main({ tracks }) {
  const [radioIndex, setRadioIndex] = useState(0);
  const [listRadio, setListRadio] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReadyToPlay, setIsReadyToPlay] = useState(0);
  const { name, img, url } = tracks[radioIndex];

  const audioElement = useMemo(() => new Audio(url), [url]);
  audioElement.preload = "none";

  const readyToPlay = audioElement.readyState;

  useEffect(() => {
    if (listRadio.length < 1) {
      setListRadio(tracks.map((item, i) => Object.assign(item, { index: i })));
    }
  }, [listRadio.length, radioIndex, tracks]);

  //console.log(listRadio);

  useEffect(() => {
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
          {/* <AudioVisualizer audioElement={audioElement} /> */}
          {/* <SliderThumb audioElement={audioElement} /> */}
          <AudioControls
            isPlaying={isPlaying}
            onPrev={toPrevTrack}
            onNext={toNextTrack}
            onPlayPause={setIsPlaying}
            radioIndex={radioIndex}
          />
          <VolumeRange audioElement={audioElement} />
          <AudioPlayer radioIndex={radioIndex} name={name} img={img} />
        </section>
        <Favorites />
        <Footer />
      </div>
    </>
  );
}

export default Main;
