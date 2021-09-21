import { RiSettings4Line, RiMusic2Line, RiHistoryFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import PlaylistCarrusel from "../PlaylistCarrusel";
import userImage from "../../assets/images/profile.jpg";
import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";

import "./style/navbar.scss";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="search">
          <div className="circle"></div>
          <form>
            <input type="text" placeholder="Artistas, canciones o albums" />
          </form>
        </div>

        <div className="nav-menu">
          <div className="menu-actions">
            <input type="checkbox" id="menu" />
            <label for="menu" className="icon">
              <div className="nav-list"></div>
            </label>

            <nav>
              <ul>
                <li className="user-icon-li">
                  <div
                    className="user-icon"
                    style={{
                      backgroundImage: `url(${userImage})`,
                      backgroundSize: "contain",
                    }}
                  ></div>
                  <h5>Laura Morales</h5>
                </li>
                <li>
                  <RiMusic2Line className="list-icon" />
                  <h4>Playlists</h4>
                </li>
                <li>
                  <MdFavoriteBorder className="list-icon" />
                  <h4>Favorit</h4>
                </li>
                <li>
                  <GoListUnordered className="list-icon" />
                  <h4>General list</h4>
                </li>
                <li>
                  <RiHistoryFill className="list-icon" />
                  <h4>History</h4>
                </li>
                <li>
                  <RiSettings4Line className="list-icon" />
                  <h4>Settings</h4>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-general"></div>
      </div>
      <PlaylistCarrusel />
    </>
  );
}

export default Navbar;
