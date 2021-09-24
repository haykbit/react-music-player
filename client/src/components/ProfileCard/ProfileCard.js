import React from "react";
import ProfileInfo from "../ProfileInfo/index";
import PaymentInfo from "../PaymentInfo/index";

import "./styles/profileCard.scss";

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileInfo />
      <PaymentInfo />
    </div>
  );
}

export default ProfileCard;
