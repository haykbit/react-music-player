import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Input from "../Input";
import Button from "../Buttons/index";
import {
  updateUserEmail,
  updateUserPassword,
  getCurrentUser,
  reauthenticate,
} from "../../services/auth";
import { updateUserProfile } from "../../api/api";
import { useState } from "react";

import "./style/userprofile.scss";

function UserProfile() {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  async function handleEmailSubmit(e) {
    e.preventDefault();
    // reauthenticate();
    updateUserEmail(profile.email);
    console.log(getCurrentUser());
    const userId = getCurrentUser().uid;
    updateUserProfile(userId, { email: profile.email });
  }

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    // console.log(e.target.value, "CHANGE");
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
              <form onSubmit={handleEmailSubmit}>
                <Input
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={profile.email}
                />
                <Button type="submit">Change email</Button>
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
