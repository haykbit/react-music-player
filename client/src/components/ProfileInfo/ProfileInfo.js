import React, { useState } from "react";
import "./styles/profileInfo.scss";
import userImage from "../../assets/images/profile.jpg";
import Button from "../Buttons/index";

function ProfileInfo() {
  const [isReadyOnly, setIsReadOnly] = useState(true);
  return (
    <>
      <div className="user-info">
        <h2 className="user-info-title">User information</h2>
        <div className="content">
          <div className="left-column">
            <div className="profile-picture-box">
              <div
                className="profile-picture"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${userImage})`,
                }}
              >
                {" "}
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="form-box">
              <form>
                <div>
                  <input
                    className="user-input"
                    placeholder="Name"
                    readOnly={isReadyOnly}
                  />
                  <input
                    className="user-input"
                    placeholder="Surname"
                    readOnly={isReadyOnly}
                  />
                </div>

                <div>
                  <input
                    className="user-input"
                    placeholder="Email"
                    readOnly={isReadyOnly}
                  />
                  <Button className="user-input password-button">
                    Reset Password
                  </Button>
                </div>
              </form>
            </div>
            <div className="genre-box">
              <div className="genre-side">
                <div className="genre-checkbox-box">
                  <label>
                    Pop Rock
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Rock
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Reggaeton
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Indie
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    EDM
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Rap
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Metal
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Techno
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Jazz
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Blues
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
              </div>
              <div className="button-side">
                {isReadyOnly ? (
                  <Button
                    className="edit-btn"
                    label="Edit"
                    onClick={() => setIsReadOnly((prevState) => !prevState)}
                  >
                    Edit
                  </Button>
                ) : null}

                {!isReadyOnly ? (
                  <Button
                    className="save-btn"
                    onClick={() => setIsReadOnly((prevState) => !prevState)}
                  >
                    Save
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
