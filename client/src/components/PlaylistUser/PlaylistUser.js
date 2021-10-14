import React from "react";
import "./style/playlistuser.scss";
function PlaylistUser({ playlistUserData }) {
  return (
    <div className="profile-page-container">
      <h2 className="profile-title">Profile information</h2>
      <h3 className="profile-name">
        {playlistUserData.firstName} {playlistUserData.lastName}
      </h3>
    </div>
  );
}

export default PlaylistUser;
