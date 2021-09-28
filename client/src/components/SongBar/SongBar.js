import "./style/songbar.scss";
import imageSong from "../../assets/images/albums/arctic-album-3.jpeg";
import bar from "../../assets/images/icons/bar-image.jpeg";
import play from "../../assets/images/icons/play.png";
import pause from "../../assets/images/icons/pause.png";
import backArrow from "../../assets/images/icons/back-arrow.png";
import forwardArrow from "../../assets/images/icons/forward-arrow.png";
import sound from "../../assets/images/icons/sound.png";
import config from "../../assets/images/icons/config.png";
import close from "../../assets/images/icons/close.png";

function SongBar() {
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
          <button className="play-button" onClick={() => console.log("play")}>
            <img src={play} alt="" />
          </button>
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
