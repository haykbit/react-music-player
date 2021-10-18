import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLikeSong, cancelLikedSongs } from "../../redux/song/action";
import { getSongPlayNow } from "../../redux/player/action";
import { getMyPlaylists } from "../../redux/playlist/action";
import { getLikedSongs } from "../../api/api";
import { fancyTimeFormat } from "../../util/timeFormatter";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import RightClickMenu from "../RightClickMenu";
import SongEditModal from "../UploadedSongsPlaylist/SongEditModal";
import DeleteConfirmation from "../DeleteConfirmation";
import AddToPlaylist from "../AddToPlaylist";
import { getCurrentUser } from "../../services/auth";
function IndividualSong({ song, index, playlist, favorite, playlistData }) {
  const dispatch = useDispatch();
  const { user, authObserverSuccess } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.song);
  const { myPlaylists, addSongToPlaylistSuccess, removeSongSuccess } =
    useSelector((state) => state.playlist);
  const [liked, setLiked] = useState(favorite);
  const [myFavoriteSongs, setMyFavoriteSongs] = useState([]);
  const [modals, setModals] = useState({
    editModal: false,
    deleteModal: false,
    addToPlaylist: false,
  });
  const [contextMenu, setContextMenu] = useState(false);
  const [displayMyLists, setDisplayMyLists] = useState([]);
  const Toggle = () => setContextMenu(!contextMenu);

  const ToggleAddToPlaylist = () => {
    setModals({ ...modals, addToPlaylist: !modals.addToPlaylist });
    song.private
      ? setDisplayMyLists(
          myPlaylists.filter(
            (item) => item.private && !item.songs.includes(song._id)
          )
        )
      : setDisplayMyLists(
          myPlaylists.filter((item) => !item.songs.includes(song._id))
        );
  };

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getMyFavSongs();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getMyLists();
    }
  }, [displayMyLists, addSongToPlaylistSuccess]);

  async function getMyFavSongs() {
    const myFavSongs = await getLikedSongs(user.uid);
    setMyFavoriteSongs(myFavSongs.data.data);
  }

  function getMyLists() {
    dispatch(getMyPlaylists(user.uid));
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

  const ToggleEditModal = () => {
    setModals({ ...modals, editModal: !modals.editModal });
  };
  const ToggleDeleteModal = () =>
    setModals({ ...modals, deleteModal: !modals.deleteModal });

  function handlePlayClick() {
    //TODO add hidden or not condition
    dispatch(getSongPlayNow(song, playlist, index));
  }

  const userUid = getCurrentUser().uid;
  return (
    <>
      {modals.addToPlaylist && (
        <AddToPlaylist
          show={modals.addToPlaylist}
          close={ToggleAddToPlaylist}
          text="Add to playlist"
          currentData={song}
          user={user}
          displayData={displayMyLists}
          isPlaylist={false}
        />
      )}

      <div className="song-info">
        <div
          className="song-cover"
          style={{
            backgroundImage: `url(${song.songImage})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="song-name">
          <h3>{song.title}</h3>
          <h5>{song.artist}</h5>
        </div>
      </div>
      <div className="song-actions-container">
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
              <FaHeart className={`like-icon ${handleClassName()}`} />
            </button>
          </div>
        </div>

        <div className="context-container">
          <button onClick={() => Toggle()} className="context-menu-btn">
            <IoMdMore className="context-icon" />
          </button>
          <RightClickMenu
            show={contextMenu}
            closeMenu={Toggle}
            handleLike={handleLikeClick}
            ToggleEditModal={ToggleEditModal}
            ToggleAddToPlaylist={ToggleAddToPlaylist}
            ToggleDeleteModal={ToggleDeleteModal}
            modals={modals}
            song={song}
            playlistData={playlistData}
          />
          {modals.editModal && (
            <SongEditModal
              show={modals.editModal}
              close={ToggleEditModal}
              song={song}
            />
          )}
          {modals.deleteModal && (
            <DeleteConfirmation
              show={modals.deleteModal}
              close={ToggleDeleteModal}
              songId={song._id}
              userId={userUid}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default IndividualSong;
