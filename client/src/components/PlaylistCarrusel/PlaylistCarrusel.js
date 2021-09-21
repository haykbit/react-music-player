import { RiSettings4Line, RiMusic2Line, RiHistoryFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import userImage from "../../assets/images/profile.jpg";
import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";

import "./style/playlist.scss";

function PlaylistCarrusel() {
  return (
    <>
      <div className="recomend-container">
        <h2 className="recomend-title">Te puede gustar...</h2>
        <div className="recomend-list">
          <div className="scroll-container">
            <div className="scroll">
              <a href="#" className="fill-div">
                <div
                  className="list-item"
                  style={{
                    backgroundImage: `url(${portadaUno})`,
                    backgroundSize: "auto",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="list-name">
                    <h1>Lista Pop Rock España</h1>
                  </div>
                </div>
              </a>

              <a href="#" className="fill-div">
                <div
                  className="list-item"
                  style={{
                    backgroundImage: `url(${portadaDos})`,
                    backgroundSize: "auto",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="list-name">
                    <h1>Lista Pop Rock España</h1>
                  </div>
                </div>
              </a>
              <div
                className="list-item"
                style={{
                  backgroundImage: `url(${portadaTres})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="list-name">
                  <h1>Lista Pop Rock España</h1>
                </div>
              </div>
              <div
                className="list-item"
                style={{
                  backgroundImage: `url(${portadaCuatro})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="list-name">
                  <h1>Lista Pop Rock España</h1>
                </div>
              </div>
              <div
                className="list-item"
                style={{
                  backgroundImage: `url(${portadaUno})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="list-name">
                  <h1>Lista Pop Rock España</h1>
                </div>
              </div>
              <div
                className="list-item"
                style={{
                  backgroundImage: `url(${portadaDos})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="list-name">
                  <h1>Lista Pop Rock España</h1>
                </div>
              </div>
              <div
                className="list-item"
                style={{
                  backgroundImage: `url(${portadaTres})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="list-name">
                  <h1>Lista Pop Rock España</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistCarrusel;
