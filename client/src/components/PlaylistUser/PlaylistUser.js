import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMySongsPlaylist } from "../../api/api";
import { getMyPlaylists } from "../../redux/playlist/action";
import { getSongPlayNow } from "../../redux/player/action";
import { followUser, cancelFollowUser } from "../../redux/user/action";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./style/playlistuser.scss";
import backgroundPicture from "../../assets/images/background/profile-picture-background.jpg";
import editIcon from "../../assets/images/icons/editIcon.png";
function PlaylistUser({ playlistUserData }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { myPlaylists } = useSelector((state) => state.playlist);
  const { followUserSuccess, cancelFollowingUserSuccess } = useSelector(
    (state) => state.user
  );

  const [isUploaded, setIsUploaded] = useState(false);
  const [image, setImage] = useState("");
  const [artistSongs, setArtistSongs] = useState([]);
  const [follow, setFollow] = useState(false);
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

  function handleFollowUser() {
    const isFollowed =
      playlistUserData.followedBy &&
      playlistUserData.followedBy.some((ele) => ele === user.uid);
    if (isFollowed === false) {
      dispatch(followUser(playlistUserData.firebase_id, user.uid));
    } else {
      dispatch(cancelFollowUser(playlistUserData.firebase_id, user.uid));
    }
  }

  function handleClassNameAndFollow() {
    const checkFollowers =
      playlistUserData.followedBy &&
      playlistUserData.followedBy.some((ele) => ele === user.uid)
        ? "following"
        : "follow";
    return checkFollowers;
  }
  return (
    <div
      className="top-half"
      style={{
        backgroundImage: `url(${backgroundPicture})`,
      }}
    >
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
              <p>
                Followers :{" "}
                {playlistUserData.followedBy
                  ? playlistUserData.followedBy.length
                  : "0"}
              </p>
              <p>
                Following :{" "}
                {playlistUserData.following ? playlistUserData.following : "0"}
              </p>
            </div>
            {user && playlistUserData.firebase_id !== user.uid ? (
              <div className="follow-button">
                <button
                  className={`follow-button ${handleClassNameAndFollow()}`}
                  onClick={handleFollowUser}
                >
                  {handleClassNameAndFollow().toUpperCase()}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="box-body">
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
                    {user && playlistUserData.firebase_id !== user.uid
                      ? myPlaylists
                          .filter((item) => !item.private)
                          .map((playlist, index) => {
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
                                  <h5>{playlist.description}</h5>
                                  <h5>
                                    Songs:{" "}
                                    {playlist.songs
                                      ? playlist.songs.length
                                      : "0"}
                                  </h5>
                                </div>
                              </div>
                            );
                          })
                      : myPlaylists.map((playlist, index) => {
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
                                <h5>{playlist.description}</h5>
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
                  {user && playlistUserData.firebase_id !== user.uid ? (
                    <>
                      {artistSongs
                        ? artistSongs
                            .filter((item) => !item.private)
                            .map((song) => {
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
                                      {song.artist}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                        : ""}
                    </>
                  ) : (
                    <>
                      {artistSongs
                        ? artistSongs.map((song) => {
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
                                    {song.artist}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistUser;
