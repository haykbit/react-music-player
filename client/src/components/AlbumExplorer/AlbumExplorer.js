import portadaUno from "../../assets/images/portada-1.png";
import portadaDos from "../../assets/images/portada-2.png";
import portadaTres from "../../assets/images/portada-3.png";
import portadaCuatro from "../../assets/images/portada-4.png";

import "./style/albumexplorer.scss";

function AlbumExplorer() {
  return (
    <>
      <div className="album-container">
        <h2 className="album-title">Album explorer</h2>
        <div className="album-list">
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
        </div>

        <div className="album-list">
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
        </div>

        <div className="album-list">
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
          <div className="album-item">
            <img src={portadaDos} alt="" />
            <h3>Album name</h3>
            <h5>Group</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumExplorer;
