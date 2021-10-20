import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/action";
import { resetUserData } from "../../redux/user/action";
import { getUserProfile } from "../../api/api";
import homeIcon from "../../assets/images/icons/home-icon.png";
import { RiMusic2Line, RiFolderMusicLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import portadaUno from "../../assets/images/icons/portada-1.png";
import SearchEngine from "../SearchEngine/SearchEngine";

import "./style/navbar.scss";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [navProfile, setNavProfile] = useState({
    firstName: "",
    lastName: "",
    profileImage: "",
  });
  const { loading, accessToken, signOutSuccess, authObserverSuccess, user } =
    useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user.userProfile);
  async function setProfileData() {
    const userData = await getUserProfile(user.uid);
    const { profileImage, firstName, lastName } = userData.data.data;
    setNavProfile({ firstName, lastName, profileImage });
  }

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      setProfileData();
    }
  }, [userState, loading]);

  const handleProfile = () => {
    history.push("/profile");
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetUserData());
  };

  const handleMyPlaylists = () => {
    history.push("/my-playlists");
  };

  const handleFavorite = () => {
    history.push("/favorites");
  };

  const handleUploaded = () => {
    history.push("/mysongs");
  };

  const handlePlaylists = () => {
    history.push("/playlists");
  };
  const handleNavProfileClick = () => {
    window.location.replace(`/playlist-user/${user.uid}`);
  };

  const handleHome = () => {
    history.push("./home-page");
  };
  return (
    <>
      <div className="nav-container">
        <SearchEngine />
        <div className="home-icon-container">
          <img
            onClick={handleHome}
            className="home-icon"
            src={homeIcon}
            alt="home-icon"
          ></img>
        </div>

        <div className="nav-menu">
          <div className="menu-actions">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
              <div className="nav-list"></div>
            </label>

            <nav>
              <ul>
                {navProfile && (
                  <li className="user-icon-li" onClick={handleNavProfileClick}>
                    <div
                      className="user-icon"
                      style={{
                        backgroundImage: `url(${navProfile.profileImage})`,
                      }}
                    ></div>
                    <h5>
                      {navProfile.firstName} {navProfile.lastName}
                    </h5>
                  </li>
                )}
                <li onClick={handleProfile}>
                  <BiUserCircle className="list-icon" />
                  <h4>Profile</h4>
                </li>
                <li onClick={handlePlaylists}>
                  <RiMusic2Line className="list-icon" />
                  <h4>Playlists</h4>
                </li>
                <li onClick={handleMyPlaylists}>
                  <GoListUnordered className="list-icon" />
                  <h4>My Playlists</h4>
                </li>
                <li onClick={handleFavorite}>
                  <MdFavoriteBorder className="list-icon" />
                  <h4>Favorite</h4>
                </li>
                <li onClick={handleUploaded}>
                  <RiFolderMusicLine className="list-icon" />
                  <h4>My Music</h4>
                </li>
                <li onClick={handleLogout}>
                  <IoLogOutOutline className="list-icon" />
                  <h4 className="logout">Logout</h4>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-general"></div>
      </div>
    </>
  );
}

export default Navbar;
