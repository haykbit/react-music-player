import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { getFavoritePlaylists } from "../../redux/playlist/action";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./style/playlistuser.scss";
import backgroundPicture from "../../assets/images/background/profile-picture-background.jpg";
import editIcon from "../../assets/images/icons/editIcon.png";
function PlaylistUser({ playlistUserData }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const {
    myFavoritePlaylists,
    playlistCreatedSuccess,
    getMyFavoritePlaylistsSuccess,
  } = useSelector((state) => state.playlist);
  const [playlistsData, setPlaylistsData] = useState([]);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      dispatch(getFavoritePlaylists(playlistUserData.firebase_id));
    }
  }, [loading, authObserverSuccess, playlistCreatedSuccess]);
  useEffect(() => {
    dispatch(authObserverLoading());
    if (signOutSuccess) {
      history.push("/login");
    }
  }, []);
  console.log(myFavoritePlaylists);

  const [isUploaded, setIsUploaded] = useState(false);
  const [image, setImage] = useState("");

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
          <div className="follow-button">
            <button>Follow</button>
          </div>
          <div className="box-body">
            {/* <h2 className="profile-title">Profile information</h2> */}
            <div className="box-information">
              <h3 className="profile-name">
                {playlistUserData.firstName} {playlistUserData.lastName}
              </h3>
            </div>
            <div className="public-playlist-info">
              <div className="scroll-container">
                <div className="scroll">
                  <>
                    {user && playlistUserData.firebase_id !== user.uid
                      ? myFavoritePlaylists
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
                      : myFavoritePlaylists.map((playlist, index) => {
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
                  </>
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
