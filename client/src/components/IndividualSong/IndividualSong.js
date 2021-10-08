import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLikeSong, cancelLikedSongs } from "../../redux/song/action";
import { getSongPlayNow } from "../../redux/player/action";
import { getLikedSongs } from "../../api/api";
import { fancyTimeFormat } from "../../util/timeFormatter";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import RightClickMenu from "../RightClickMenu";
import SongEditModal from "../SongEditModal";

function IndividualSong({ song }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { likeSongSuccess, loading } = useSelector((state) => state.song);

  const [liked, setLiked] = useState(false);
  const [myFavoriteSongs, setMyFavoriteSongs] = useState([]);
  const [modals, setModals] = useState({
    editModal: false,
    deleteModal: false,
  });
  const [contextMenu, setContextMenu] = useState(false);
  const Toggle = () => setContextMenu(!contextMenu);

  useEffect(() => {
    getMyFavSongs();
  }, [loading]);

  async function getMyFavSongs() {
    const myFavSongs = await getLikedSongs(user.uid);
    setMyFavoriteSongs(myFavSongs.data.data);
  }

  function handleClassName() {
    const className = myFavoriteSongs.some((ele) => ele["_id"] === song._id)
      ? "liked"
      : "";
    return className;
  }

  function handleLikeClick() {
    setLiked((prev) => !prev);
    if (liked === false) {
      dispatch(dispatchLikeSong(song._id, user.uid));
    } else {
      dispatch(cancelLikedSongs(song._id, user.uid));
    }
  }
  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;

  const ToggleEditModal = () => {
    setModals({ ...modals, editModal: !modals.editModal });
  };
  const ToggleDeleteModal = () =>
    setModals({ ...modals, deleteModal: !modals.deleteModal });

  function handlePlayClick() {
    //TODO add hidden or not condition
    dispatch(getSongPlayNow(song));
  }
  return (
    <div className="song-item-playlist">
      <div className="song-info">
        <div className="song-cover"></div>
        <div className="song-name">
          <h3>{song.title}</h3>
          <h5>{song.artist}</h5>
        </div>
      </div>
      <div>
        <button onClick={() => Toggle()} className="context-menu-btn">
          <label>
            <IoMdMore />
          </label>
        </button>
        <RightClickMenu
          show={contextMenu}
          closeMenu={Toggle}
          handleLike={handleLikeClick}
          ToggleEditModal={ToggleEditModal}
          ToggleDeleteModal={ToggleDeleteModal}
          modals={modals}
          song={song}
        />
        <SongEditModal
          show={modals.editModal}
          close={ToggleEditModal}
          song={song}
        />
      </div>
      <div className="song-actions">
        <div className="song-play">
          <button onClick={handlePlayClick}>
            <BsFillCaretRightFill className="play-icon" />
          </button>
        </div>
        <div className="song-time">
          <h4>{fancyTimeFormat(song.duration)}</h4>
        </div>
        <div className="song-like">
          <button onClick={handleLikeClick}>
            {liked ? (
              <FaHeart className={`like-icon ${handleClassName()}`} />
            ) : (
              <FaRegHeart className={`like-icon ${handleClassName()}`} />
            )}
          </button>
        </div>
      </div>
      <div className="context-container">
        <button onClick={() => Toggle()} className="context-menu-btn">
          <IoMdMore className="more-icon" />
        </button>
        <RightClickMenu
          show={contextMenu}
          close={Toggle}
          handleLike={handleLikeClick}
          song={song}
        />
      </div>
    </div>
  );
}

export default IndividualSong;
