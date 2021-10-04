import React, { useState } from "react";

import imageSong from "../../assets/images/albums/arctic-album-3.jpeg";
import playImage from "../../assets/images/icons/play.png";
import pauseImage from "../../assets/images/icons/pause.png";
import backArrow from "../../assets/images/icons/back-arrow.png";
import forwardArrow from "../../assets/images/icons/forward-arrow.png";
import sound from "../../assets/images/icons/sound.png";
import config from "../../assets/images/icons/config.png";
import close from "../../assets/images/icons/close.png";
import "./style/songbar.scss";

function SongBar() {
  let url = [
    { song: "http://streaming.tdiradio.com:8000/house.mp3" },
    { song: "http://streaming.tdiradio.com:8000/house.mp3" },
    { song: "http://streaming.tdiradio.com:8000/house.mp3" },
    { song: "http://streaming.tdiradio.com:8000/house.mp3" },
    { song: "http://streaming.tdiradio.com:8000/house.mp3" },
  ];
  const [song, setSong] = useState({});
  const [musicState, setMusicState] = useState({ play: false, pause: true });
  const [audio, setAudio] = useState();

  const play = () => {
    setMusicState({ play: true, pause: false });
    audio.play();
  };

  const pause = () => {
    setMusicState({ play: false, pause: true });
    audio.pause();
  };

  return (
    <>
      <div className="music-controlls">
        <div className="song-item">
          <img src={imageSong} alt="" />
          <div className="song-info">
            <h3>Suck it and see</h3>
            <h5>Arctic Monkeys</h5>
          </div>
        </div>
        <div className="actions-left">
          <button className="action-button" onClick={() => console.log("back")}>
            <img src={backArrow} alt="" width="10px" height="10px" />
          </button>
          {musicState.play == true ? (
            <button className="pause-button" onClick={pause}>
              <img src={pauseImage} alt="" />
            </button>
          ) : (
            <button className="play-button" onClick={play}>
              <img src={playImage} alt="" />
            </button>
          )}
          <button
            className="action-button"
            onClick={() => console.log("front")}
          >
            <img src={forwardArrow} alt="" width="10px" height="10px" />
          </button>
        </div>
        <div className="bar-container">
          <h4>2:32</h4>
          <div className="bar">
            <span></span>
          </div>
          <h4>4:54</h4>
        </div>
        <div className="actions-right">
          <img src={sound} alt="" />
          <div className="sound-bar">
            <span className="line"></span>
          </div>
          <div className="config">
            <button>
              <img src={config} alt="" />
            </button>
          </div>
          <div className="close">
            <button>
              <img src={close} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SongBar;
