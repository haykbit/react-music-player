import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/icons/portada-2.png";
import portadaTres from "../../assets/images/icons/portada-3.png";
import portadaCuatro from "../../assets/images/icons/portada-4.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import "./style/playlistnew.scss";

function PlaylistNew() {
  return (
    <>
      <div className="newlist-container">
        <section className="new-spain">
          <h2 className="recomend-title">New songs Spain</h2>
          <div className="song-list">
            {/*SONG ITEM*/}
            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              {/*SONG ITEM*/}
              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>

            {/*SONG ITEM*/}
            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="new-world">
          <h2 className="recomend-title">New songs Europe</h2>
          <div className="song-list">
            {/*SONG ITEM*/}
            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              {/*SONG ITEM*/}
              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>

            {/*SONG ITEM*/}
            <div className="song-item">
              <div className="song-info">
                <div className="song-cover"></div>
                <div className="song-name">
                  <h3>Coldplay</h3>
                  <h5>Noches en vela</h5>
                </div>
              </div>

              <div className="song-actions">
                <div className="song-play">
                  <button>
                    <BsFillCaretRightFill className="play-icon" />
                  </button>
                </div>
                <div className="song-time">
                  <h4>4:23</h4>
                </div>
                <div className="song-like">
                  <button>
                    <FaRegHeart className="like-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PlaylistNew;
