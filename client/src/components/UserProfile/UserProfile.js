import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import ProfileCard from "../ProfileCard/index";

import "./style/userprofile.scss";

function UserProfile() {
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
          <ProfileCard />

          <div className="payment-info"></div>
          <div className="sub-info"></div>
          <div className="upload-info"></div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
