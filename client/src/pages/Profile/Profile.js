import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SongBar from "../../components/SongBar";
import UserProfile from "../../components/UserProfile";

import "./style/profile.scss";

function Profile() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <SongBar />
    </>
  );
}

export default Profile;
