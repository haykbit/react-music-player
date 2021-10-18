import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMySongsPlaylist } from "../../api/api";
import { getMyPlaylists } from "../../redux/playlist/action";
import { getSongPlayNow } from "../../redux/player/action";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./style/playlistuser.scss";
import backgroundPicture from "../../assets/images/background/profile-picture-background.jpg";
import editIcon from "../../assets/images/icons/editIcon.png";
function PlaylistUser({ playlistUserData }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { myPlaylists, playlistCreatedSuccess } = useSelector(
    (state) => state.playlist
  );

  const [isUploaded, setIsUploaded] = useState(false);
  const [image, setImage] = useState("");
  const [artistSongs, setArtistSongs] = useState([]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getMyPlaylists(playlistUserData.firebase_id));
      loadUserSongs();
    }
  }, [loading]);

  async function loadUserSongs() {
    const songs = await getMySongsPlaylist(playlistUserData.firebase_id);
    setArtistSongs(songs.data.data);
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setImage(e.target.files[0]);
      reader.onload = function (e) {
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function playSearchedSong(song) {
    dispatch(getSongPlayNow(song, [song], 0));
  }

  return (
    <div
      className="top-half"
      style={{
        backgroundImage: `url(${backgroundPicture})`,
      }}
    >
      <div className="edit-background">
        {" "}
        <label
          htmlFor="upload-input"
          className="edit-icon"
          style={{
            backgroundImage: `url(${editIcon})`,
          }}
        ></label>
        <input
          id="upload-input"
          className="input-upload"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </div>

      <div className="profile-page-container">
        <div className="profile-page-box">
          <div className="box-header">
            <div
              className="profile-picture"
              style={{
                backgroundImage: `url(${playlistUserData.profileImage})`,
              }}
            ></div>
          </div>
          <div className="follow-info">
            <div className="follow-data">
              <p>Followers : 0</p>
              <p>Following : 0</p>
            </div>

            <div className="follow-button">
              <button>Follow</button>
            </div>
          </div>

          <div className="box-body">
            {/* <h2 className="profile-title">Profile information</h2> */}
            <div className="box-information">
              <h3 className="profile-name">
                {playlistUserData.firstName} {playlistUserData.lastName}
              </h3>
            </div>
            <div className="playlist-songs-container">
              <h3>Playlists</h3>
              <div className="public-playlist-info">
                <div className="scroll-container">
                  <div className="scroll">
                    {myPlaylists.map((playlist, index) => {
                      return (
                        <div
                          key={playlist.id}
                          index={index}
                          className="playlist-example"
                          style={{
                            backgroundImage: `url(${playlist.playlistImage})`,
                          }}
                          onClick={() =>
                            history.push({
                              pathname: `/playlist/${playlist._id}`,
                              state: { playlist },
                            })
                          }
                        >
                          <div className="playlist-example-info">
                            <h1 style={{ fontSize: "20px" }}>
                              {playlist.title}
                            </h1>
                            <h5>
                              Songs:{" "}
                              {playlist.songs ? playlist.songs.length : "0"}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="public-songs-info">
                <h3 className="songs-title">Songs</h3>
                <div className="songs-box">
                  {artistSongs ? (
                    <>
                      {artistSongs.map((song) => {
                        return (
                          <div
                            className="songs-example"
                            key={song._id}
                            onClick={() => playSearchedSong(song)}
                          >
                            <div
                              className="song-info-img"
                              style={{
                                backgroundImage: `url(${song.songImage})`,
                              }}
                            ></div>
                            <div className="song-info-text">
                              <div className="song-info-title">
                                {song.title}
                              </div>
                              <div className="song-info-artist">
                                {playlistUserData.userName}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {/* <div className="scroll-container">
                  <div className="scroll">
                    <>
                      {artistSongs.map((playlist, index) => {
                        return (
                          <div
                            key={playlist.id}
                            index={index}
                            className="playlist-example"
                            style={{
                              backgroundImage: `url(${playlist.playlistImage})`,
                            }}
                            onClick={() =>
                              history.push({
                                pathname: `/playlist/${playlist._id}`,
                                state: { playlist },
                              })
                            }
                          >
                            <div className="playlist-example-info">
                              <h1 style={{ fontSize: "20px" }}>
                                {playlist.title}
                              </h1>
                              <h5>
                                Songs:{" "}
                                {playlist.songs ? playlist.songs.length : "0"}
                              </h5>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistUser;
