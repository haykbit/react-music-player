import React from "react";
import "./style/playlistuser.scss";
import backgroundPicture from "../../assets/images/background/profile-picture-background.jpg";
function PlaylistUser({ playlistUserData }) {
  console.log(playlistUserData);
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
              <div className="playlist-example"></div>
              <div className="playlist-example"></div>
              <div className="playlist-example"></div>
              <div className="playlist-example"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistUser;
