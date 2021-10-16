import React, { useState } from "react";
import "./style/playlistuser.scss";
import backgroundPicture from "../../assets/images/background/profile-picture-background.jpg";
import editIcon from "../../assets/images/icons/editIcon.png";
function PlaylistUser({ playlistUserData }) {
  console.log(playlistUserData);

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
