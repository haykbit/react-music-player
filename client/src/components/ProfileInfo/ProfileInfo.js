import React, { useState, useEffect } from "react";
import "./styles/profileInfo.scss";
import ImageUploadIcon from "../../assets/images/icons/uploadImage.png";
import closeIcon from "../../assets/images/icons/closeIcon.png";
import Button from "../Buttons/index";
import Input from "../Input/index";

import { getCurrentUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfileInfo,
  updateUserProfileEmail,
  updateUserProfilePassword,
} from "../../redux/user/action";
import { getUserProfile } from "../../api/api";
import { Formik } from "formik";
import FormSchema from "./FormSchema";

function ProfileInfo() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [openResetPassword, setOpenResetPassword] = useState(true);
  const [openResetEmail, setOpenResetEmail] = useState(true);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    profileImageURL: "",
    profileImageFile: "",
  });
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const { loading, accessToken, signOutSuccess, authObserverSuccess, user } =
    useSelector((state) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      setProfile({ firstName: "", lastName: "" });
      setMyEmail("");
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      updateOnMount();
    }
  }, [loading]);

  async function updateOnMount() {
    try {
      console.log(user, "REDUX USER");
      const userData = await getUserProfile(user.uid);
      console.log(userData, "USER DATA");
      const { email, firstName, lastName, profileImage } = userData.data.data;
      setMyEmail(email);
      setProfile({
        firstName: firstName,
        lastName: lastName,
        profileImageURL: profileImage || "",
      });
    } catch (error) {
      alert("HELLO");
    }
  }

  function handleUserInfoSubmit(e) {
    e.preventDefault();
    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileInfo(userId, profile));
    setIsDisabled((prevState) => !prevState);
  }
  function handleUserEmailSubmit(e) {
    e.preventDefault();
    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileEmail(userId, myEmail, myPassword));
    setOpenResetEmail(true);
    setMyPassword("");
  }

  function handleProfileChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }
  function handleEmailChange(e) {
    setMyEmail(e.target.value);
  }
  function handleMyPasswordChange(e) {
    setMyPassword(e.target.value);
  }
  function handleImageChange(e) {
    setProfile({ ...profile, profileImageFile: e.target.files[0] });

    let reader = new FileReader();

    reader.onload = function (e) {
      setImage(e.target.result);
      setIsUploaded(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  }
  function handleEmailOpen() {
    setOpenResetEmail(!openResetEmail);
    setOpenResetPassword(true);
  }
  function handlePasswordOpen() {
    setOpenResetPassword(!openResetPassword);
    setOpenResetEmail(true);
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
                          profile.profileImageURL
                            ? profile.profileImageURL
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
                    name="firstName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.firstName}
                  />
                  <input
                    className="user-input"
                    placeholder="Surname"
                    name="lastName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.lastName}
                  />
                  <Button type="submit">Change Profile</Button>
                </div>
              </form>
            </div>
            <div>
              <Button
                className="user-input password-button"
                onClick={() => handleEmailOpen()}
              >
                Reset Email
              </Button>
              <Button
                className="user-input password-button"
                onClick={() => handlePasswordOpen()}
              >
                Reset Password
              </Button>
            </div>
            <div hidden={openResetPassword}>
              <Formik
                onSubmit={(values) => {
                  setOpenResetPassword(true);
                  dispatch(
                    updateUserProfilePassword(
                      values.currentPassword,
                      values.newPassword
                    )
                  );
                }}
                initialValues={{
                  currentPassword: "",
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
                  <form onSubmit={handleSubmit} key={2}>
                    <Input
                      className="new-password-input"
                      name="currentPassword"
                      type="password"
                      placeholder="Current Password"
                      onChange={handleChange}
                      value={values.currentPassword}
                      hasErrorMessage={touched.currentPassword}
                      errorMessage={errors.currentPassword}
                      onBlur={handleBlur}
                    />
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
                      className="user-input"
                      submitButton
                      disabled={isValidating || !isValid}
                    >
                      Save
                    </Button>
                  </form>
                )}
              </Formik>
            </div>

            <div hidden={openResetEmail}>
              <form onSubmit={handleUserEmailSubmit}>
                <input
                  className="new-password-input"
                  name="myEmail"
                  type="text"
                  placeholder="New Email"
                  onChange={handleEmailChange}
                  value={myEmail}
                  required
                />
                <input
                  className="new-password-input"
                  name="myPassword"
                  type="password"
                  placeholder="Current Password"
                  value={myPassword}
                  onChange={(e) => handleMyPasswordChange(e)}
                  required
                />

                <Button type="submit" className="user-input">
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
