import React, { useState, useEffect } from "react";
import "./styles/profileInfo.scss";
import ImageUploadIcon from "../../assets/images/icons/uploadImage.png";
import closeIcon from "../../assets/images/icons/closeIcon.png";
import Button from "../Buttons/index";
import Input from "../Input/index";

import { getCurrentUser } from "../../services/auth";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfileInfo,
  updateUserProfilePassword,
} from "../../redux/user/action";
import { getUserProfile } from "../../api/api";
import { Formik } from "formik";
import FormSchema from "./FormSchema";

function ProfileInfo() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isReadyOnly, setIsReadOnly] = useState(true);
  const [openResetPassword, setOpenResetPassword] = useState(true);
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
    profileImage: "",
  });

  const { loading, accessToken, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      setProfile({ email: "", firstName: "", lastName: "" });
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    async function updateOnMount() {
      const userData = await getUserProfile(userId.uid);
      console.log(userData, "USER DATA");
      const { email, firstName, lastName, profileImage } = userData.data.data;
      setProfile({
        email: email,
        firstName: firstName,
        lastName: lastName,
        profileImage: profileImage || "",
      });
    }
    updateOnMount();
  }, []);

  function handleUserInfoSubmit(e) {
    e.preventDefault();
    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileInfo(userId, profile));
    setIsDisabled((prevState) => !prevState);
  }

  function handleProfileChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(e) {
    setProfile({ ...profile, profileImage: e.target.files[0] });

    let reader = new FileReader();

    reader.onload = function (e) {
      setImage(e.target.result);
      setIsUploaded(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  }
  return (
    <>
      <div className="user-info">
        <h2 className="user-info-title">User information</h2>
        <div className="content">
          <div className="left-column">
            <div className="profile-picture-box">
              {!isUploaded ? (
                <>
                  <label htmlFor="input-upload">
                    <div
                      className="profile-picture-uploaded"
                      style={{
                        backgroundImage: `url(${
                          profile.profileImage
                            ? profile.profileImage
                            : ImageUploadIcon
                        })`,
                      }}
                    >
                      <input
                        id="input-upload"
                        className="input-upload"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageChange}
                      />
                    </div>
                  </label>
                </>
              ) : (
                <div className="image-preview">
                  <img
                    className="close-icon"
                    src={closeIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImage(null);
                    }}
                  />
                  <img
                    src={image}
                    alt="uploaded-img"
                    id="uploaded-image"
                    className="profile-picture"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="right-column">
            <div className="form-box">
              <form onSubmit={handleUserInfoSubmit}>
                <div>
                  <input
                    className="user-input"
                    placeholder="Name"
                    disabled={isDisabled}
                    name="firstName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.firstName}
                  />
                  <input
                    className="user-input"
                    placeholder="Surname"
                    disabled={isDisabled}
                    name="lastName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.lastName}
                  />
                </div>

                <div>
                  <input
                    className="user-input"
                    placeholder="Email"
                    disabled={isDisabled}
                    name="email"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.email}
                  />
                  <Button type="submit">Change Profile</Button>
                </div>
              </form>
              <Button
                className="user-input password-button"
                onClick={() => setOpenResetPassword(!openResetPassword)}
              >
                Reset Password
              </Button>
              <div hidden={openResetPassword}>
                <Formik
                  onSubmit={(values) => {
                    setOpenResetPassword(true);
                    dispatch(updateUserProfilePassword(values.newPassword));
                  }}
                  initialValues={{
                    newPassword: "",
                    confirm: "",
                  }}
                  validationSchema={FormSchema}
                >
                  {({
                    errors,
                    values,
                    touched,
                    isValidating,
                    isValid,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Input
                        className="new-password-input"
                        name="newPassword"
                        type="password"
                        placeholder="New Password"
                        onChange={handleChange}
                        value={values.newPassword}
                        hasErrorMessage={touched.newPassword}
                        errorMessage={errors.newPassword}
                        onBlur={handleBlur}
                      />
                      <Input
                        className="new-password-input"
                        name="confirm"
                        type="password"
                        placeholder="Repeat New Password"
                        onChange={handleChange}
                        value={values.confirm}
                        hasErrorMessage={touched.confirm}
                        errorMessage={errors.confirm}
                        onBlur={handleBlur}
                      />
                      <Button
                        className="user-input password-button"
                        submitButton
                        disabled={isValidating || !isValid}
                      >
                        Save
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>
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
                {isDisabled ? (
                  <Button
                    className="edit-btn"
                    label="Edit"
                    onClick={() => setIsDisabled((prevState) => !prevState)}
                  >
                    Edit
                  </Button>
                ) : null}

                {!isDisabled ? (
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
