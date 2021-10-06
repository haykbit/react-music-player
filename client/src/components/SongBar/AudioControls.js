import React from "react";
import Play from "../../assets/images/icons/play.png";
import Pause from "../../assets/images/icons/pause.png";
import Prev from "../../assets/images/icons/back-arrow.png";
import Next from "../../assets/images/icons/forward-arrow.png";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <img src={Prev} alt="" width="10px" height="10px" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="button-pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <img src={Pause} alt="" width="50px" height="50px" />
      </button>
    ) : (
      <button
        type="button"
        className="button-play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <img src={Play} alt="" width="50px" height="50px" />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <img src={Next} alt="" width="10px" height="10px" />
    </button>
  </div>
);

export default AudioControls;
