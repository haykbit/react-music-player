import React, { useState, useEffect } from "react";
import "./styles/profileInfo.scss";
import userImage from "../../assets/images/profile.jpg";
import Button from "../Buttons/index";
import { getCurrentUser } from "../../services/auth";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfileInfo,
  updateUserProfilePassword,
} from "../../redux/user/action";

function ProfileInfo() {
  const [isReadyOnly, setIsReadOnly] = useState(true);
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const { loading, accessToken, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const authUserState = useSelector((state) => state.auth.user);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      setProfile({ email: "", firstName: "", lastName: "" });
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);

  useEffect(() => {
    setProfile({
      email: authUserState.email,
      firstName: authUserState.firstName,
      lastName: authUserState.lastName,
    });
  }, []);

  function handleUserInfoSubmit(e) {
    e.preventDefault();
    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileInfo(userId, profile));
    setIsReadOnly((prevState) => !prevState);
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    dispatch(updateUserProfilePassword(password));
  }

  function handleProfileChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(e.target.value, "CHANGE");
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

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
              <form onSubmit={handleUserInfoSubmit}>
                <div>
                  <input
                    className="user-input"
                    placeholder="Name"
                    readOnly={isReadyOnly}
                    name="firstName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.firstName}
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
                  <Button className="save-btn" onClick={handleUserInfoSubmit}>
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
