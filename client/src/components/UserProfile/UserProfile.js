import React, { useState, useEffect } from "react";
import ProfileInfo from "../ProfileInfo/index";
import PaymentInfo from "../PaymentInfo/index";
import SubscriptionInfo from "../SubscriptionInfo/SubscriptionInfo";
import UploadInfo from "../UploadInfo";
import { useHistory } from "react-router-dom";

import "./style/userprofile.scss";

function UserProfile() {
  const [show, setShow] = useState({
    user: false,
    payment: false,
    sub: false,
    upload: false,
  });

  const history = useHistory();

  const handleHome = () => {
    history.push("/home-page");
  };

  useEffect(() => {
    setShow({ user: true });
  }, []);

  const handleShow = (value) => {
    console.log(value);
    if (value === "profile") setShow({ user: true });
    if (value === "payment") setShow({ payment: true, user: false });
    if (value === "sub") setShow({ sub: true, user: false });
    if (value === "upload") setShow({ upload: true, user: false });
  };
  return (
    <>
      <div className="profile-container">
        <h2 className="recomend-title">Profile information</h2>
        <div className="profile-content">
          <div className="lateral-menu">
            <div className="profile-menu">
              <ul>
                <li onClick={() => handleShow("profile")}>User information</li>
                <li onClick={() => handleShow("payment")}>
                  Payment information
                </li>
                <li onClick={() => handleShow("sub")}>Subscription</li>
                <li onClick={() => handleShow("upload")}>Uploads</li>
              </ul>
            </div>
            <div>
              <button onClick={handleHome}>Home</button>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-component">
              {show.user ? <ProfileInfo /> : null}
            </div>
            <div className="payment-component">
              {show.payment ? <PaymentInfo /> : null}
            </div>
            <div className="sub-component">
              {show.sub ? <SubscriptionInfo /> : null}
            </div>
            <div className="upload-component">
              {show.upload ? <UploadInfo /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
