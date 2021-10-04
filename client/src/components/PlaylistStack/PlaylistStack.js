import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchMySongsData } from "../../redux/song/action";
import { getMySongsData } from "../../api/api";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import "./style/playlistStack.scss";

function PlaylistStack() {
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const [mySongsData, setMySongsData] = useState([]);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      songData();
    }
  }, [loading]);

  async function songData() {
    const mySongs = await getMySongsData(user.uid);
    setMySongsData(mySongs.data.data);
    console.log(mySongs);
    dispatch(dispatchMySongsData());
  }

  function format(time) {
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) - hours * 60;
    let seconds = time % 60;
    if (parseInt(hours) === 0) {
      return minutes + ":" + seconds.toFixed(0);
    }
    return hours + ":" + minutes + ":" + seconds.toFixed(0);
  }

  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <>
      <div className="song-container">
        <section className="new-spain">
          <div className="song-list-playlist">
            {/*SONG ITEM*/}
            {mySongsData.map((song) => {
              return (
                <div className="song-item-playlist" key={song._id}>
                  <div className="song-info">
                    <div className="song-cover"></div>
                    <div className="song-name">
                      <h3>Coldplay</h3>
                      <h5>{song.artist}</h5>
                    </div>
                  </div>

                  <div className="song-actions">
                    <div className="song-play">
                      <button>
                        <BsFillCaretRightFill className="play-icon" />
                      </button>
                    </div>
                    <div className="song-time">
                      <h4>{format(song.duration)}</h4>
                    </div>
                    <div className="song-like" onClick={handleLikeClick}>
                      <button>
                        <FaRegHeart
                          className={`like-icon ${liked ? "liked" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default PlaylistStack;
