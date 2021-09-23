import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserProfile from "../../components/UserProfile";

import "./style/profile.scss";

function Profile() {
  return (
    <>
      <Navbar />
      <UserProfile />
    </>
  );
}

export default Profile;
