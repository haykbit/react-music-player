import Input from "../Input";
import Button from "../Buttons/index";

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
