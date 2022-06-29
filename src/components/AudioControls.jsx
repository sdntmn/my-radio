import React from "react";
import { ReactComponent as Play } from "../images/play-button-svgrepo-com.svg";
import { ReactComponent as Pause } from "../images/pause-svgrepo-com.svg";
import { ReactComponent as Next } from "../images/forward-svgrepo-com.svg";
import { ReactComponent as Prev } from "../images/forward-svgrepo-com.svg";

const AudioControls = ({ isPlaying, onPlayPause, onPrev, onNext }) => {
  return (
    <div className='controls'>
      <button
        type='button'
        className='controls__prev button'
        aria-label='Previous'
        onClick={onPrev}>
        <Prev />
      </button>
      {isPlaying ? (
        <button
          type='button'
          className='controls__button button'
          onClick={() => onPlayPause(false)}
          aria-label='Pause'>
          <Pause />
        </button>
      ) : (
        <button
          type='button'
          className='controls__button button'
          onClick={() => onPlayPause(true)}
          aria-label='Play'>
          <Play />
        </button>
      )}
      <button
        type='button'
        className='controls__next button'
        aria-label='Next'
        onClick={onNext}>
        <Next />
      </button>
    </div>
  );
};

export default AudioControls;
