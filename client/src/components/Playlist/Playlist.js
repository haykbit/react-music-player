import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProfile } from "../../api/api";
import PlaylistStack from "./PlaylistStack";
import PlaylistContextMenu from "./PlaylistContextMenu/PlaylistContextMenu";
import PlaylistDeleteConfirmation from "./PlaylistDeleteConfirmation";

import { IoMdMore } from "react-icons/io";

import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";

import "./style/playlistcomponent.scss";
import {
  cancelFollowPlaylist,
  followPlaylist,
  getFavoritePlaylists,
} from "../../redux/playlist/action";
import { getMyFavPlaylists } from "../../api/api";

function Playlist({ playlist }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const [contextMenu, setContextMenu] = useState(false);
  const [modals, setModals] = useState({
    editModal: false,
    deleteModal: false,
  });
  const [follow, setFollow] = useState(false);
  const [myFavPlaylists, setMyFavPlaylists] = useState([]);

  // Toggles for the diferent menus and modals
  const ToggleContext = () => setContextMenu(!contextMenu);
  const ToggleEditModal = () => {
    setModals({ ...modals, editModal: !modals.editModal });
  };
  const ToggleDeleteModal = () =>
    setModals({ ...modals, deleteModal: !modals.deleteModal });

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { followSuccess, cancelFollowSuccess } = useSelector(
    (state) => state.playlist
  );

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserInfo();
      getFavoritePlaylistsInfo();
    }
  }, [loading, followSuccess, cancelFollowSuccess]);

  async function getUserInfo() {
    const user = await getUserProfile(playlist.owner);
    setUserInfo(user.data.data);
  }

  function handleFollowClick() {
    setFollow((prev) => !prev);

    if (follow === false) {
      dispatch(followPlaylist(playlist._id, user.uid));
    } else {
      dispatch(cancelFollowPlaylist(playlist._id, user.uid));
    }
  }

  async function getFavoritePlaylistsInfo() {
    dispatch(getFavoritePlaylists(user.uid));
    const myFavLists = await getMyFavPlaylists(user.uid);
    setMyFavPlaylists(myFavLists.data.data);
  }

  function handleClassNameAndFollow() {
    const checkFavLists = myFavPlaylists.some(
      (ele) => ele["_id"] === playlist._id
    )
      ? "following"
      : "follow";
    return checkFavLists;
  }
  return (
    <>
      <div className="my-playlist-body">
        <div className="left-side">
          <div className="playlist-title">
            <div
              className="album-column"
              style={{
                backgroundImage: `url(${playlist.playlistImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="text-column">
              <h1 className="playlist-name">{playlist.title}</h1>
              <h3
                className="playlist-user"
                onClick={() =>
                  history.push({
                    pathname: `/playlist-user/${userInfo.firebase_id}`,
                    state: { userInfo },
                  })
                }
              >
                {userInfo.firstName} {userInfo.lastName}
              </h3>
              <p className="playlist-genre">{playlist.description}</p>
              <p className="song-number">{playlist.songs.length} songs</p>
              {!playlist.private ? (
                <div>
                  <button
                    className={`follow-button ${handleClassNameAndFollow()}`}
                    onClick={handleFollowClick}
                  >
                    {handleClassNameAndFollow().toUpperCase()}
                  </button>
                </div>
              ) : null}
              <button
                onClick={() => ToggleContext()}
                className="context-menu-btn"
              >
                <IoMdMore className="context-icon" />
              </button>

              <div className="context-container">
                <PlaylistContextMenu
                  show={contextMenu}
                  closeMenu={ToggleContext}
                  ToggleEditModal={ToggleEditModal}
                  ToggleDeleteModal={ToggleDeleteModal}
                  playlist={playlist}
                />
              </div>
            </div>
          </div>
          <div className="song-stack">
            <PlaylistStack playlist={playlist} />
          </div>
        </div>
        <div className="right-side">
          <div className="relevant-title">Top 3 most relevant songs</div>
          <div className="relevant-songs">
            <div className="number">1</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaTres})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relevant-song-name">
              {" "}
              Four Out Of Five
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
          <div className="relevant-songs">
            <div className="number">2</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaDos})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {" "}
            </div>
            <div className="relevant-song-name">
              {" "}
              Brainstorm - Live
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
          <div className="relevant-songs">
            <div className="number">3</div>
            <div
              className="album-image"
              style={{
                backgroundImage: `url(${portadaCuatro})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relevant-song-name">
              {" "}
              She's Thunderstorms
              <div className="relevant-song-artist">Arctic Monkeys</div>
            </div>
          </div>
        </div>
      </div>

      <div className="context-container">
        {/* <PlaylistEditModal
          show={modals.editModal}
          close={ToggleEditModal}
          song={song}
        /> */}
        <PlaylistDeleteConfirmation
          show={modals.deleteModal}
          close={ToggleDeleteModal}
          playlistId={playlist._id}
          userId={userInfo.firebase_id}
        />
      </div>
    </>
  );
}

export default Playlist;
