import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Input from "../Input";
import Button from "../Buttons/index";
import { getCurrentUser, reauthenticate } from "../../services/auth";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./style/userprofile.scss";
import {
  updateUserProfileInfo,
  updateUserProfilePassword,
} from "../../redux/user/action";

function UserProfile() {
  const authUserState = useSelector((state) => state.auth.user);
  const history = useHistory();
  const { loading, accessToken, signOutSuccess } = useSelector(
    (state) => state.auth
  );

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
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [password, setPassword] = useState("");
  function handleUserInfoSubmit(e) {
    e.preventDefault();

    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileInfo(userId, profile));
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
      <div className="profile-container">
        <h2 className="recomend-title">Profile information</h2>
        <div className="profile-content">
          <div className="lateral-menu">
            <div className="profile-menu">
              <ul>
                <li>User information</li>
                <li>Payment information</li>
                <li>Subscription</li>
                <li>Uploads</li>
              </ul>
            </div>
            <div>
              <button>Home</button>
            </div>
          </div>
          <div className="profile-item">
            <div className="user-info">
              <form onSubmit={handleUserInfoSubmit}>
                <Input
                  name="email"
                  onChange={(e) => handleProfileChange(e)}
                  value={profile.email}
                />
                <Input
                  name="firstName"
                  onChange={(e) => handleProfileChange(e)}
                  value={profile.firstName}
                />
                <Input
                  name="lastName"
                  onChange={(e) => handleProfileChange(e)}
                  value={profile.lastName}
                />
                <Button type="submit">Change Profile</Button>
              </form>
              <form onSubmit={handlePasswordSubmit}>
                <Input
                  name="password"
                  onChange={(e) => handlePasswordChange(e)}
                  value={password}
                />
                <Button type="submit">Change password</Button>
              </form>
            </div>
            <div className="payment-info"></div>
            <div className="sub-info"></div>
            <div className="upload-info"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
