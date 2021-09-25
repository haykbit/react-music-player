import React from "react";
import ProfileInfo from "../ProfileInfo/index";
import PaymentInfo from "../PaymentInfo/index";
import SubscriptionInfo from "../SubscriptionInfo/SubscriptionInfo";

import "./styles/profileCard.scss";

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileInfo />
      <PaymentInfo />
      <SubscriptionInfo />
    </div>
  );
}

export default ProfileCard;
