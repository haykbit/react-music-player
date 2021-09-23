import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import portadaUno from "../../assets/images/albums/arctic-album-0.jpg";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";
import portadaCinco from "../../assets/images/albums/arctic-album-4.jpg";
import portadaSeis from "../../assets/images/albums/arctic-album-5.jpg";
import portadaOcho from "../../assets/images/albums/gorillaz-demon-days.png";
import portadaNueve from "../../assets/images/albums/linkin-p-papercut.jpeg";

import "./style/albumexplorer.scss";

function AlbumExplorer() {
  return (
    <>
      <div className="album-container">
        <h2 className="album-title">Album explorer</h2>

        <div className="carousel-box">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "row",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <Carousel plugins={["centered", "infinite", "arrows"]}>
              <img src={portadaUno} />
              <img src={portadaDos} />
              <img src={portadaTres} />
              <img src={portadaCuatro} />
              <img src={portadaCinco} />
              <img src={portadaSeis} />
              <img src={portadaOcho} />
              <img src={portadaNueve} />
            </Carousel>
            <div className="albums-section">
              <div className="album-list">
                <div className="album-item">
                  <img src={portadaUno} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
                <div className="album-item">
                  <img src={portadaDos} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
                <div className="album-item">
                  <img src={portadaTres} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
              </div>

              <div className="album-list">
                <div className="album-item">
                  <img src={portadaCuatro} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
                <div className="album-item">
                  <img src={portadaCinco} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
                <div className="album-item">
                  <img src={portadaSeis} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
              </div>

              <div className="album-list">
                <div className="album-item">
                  <img src={portadaOcho} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
                <div className="album-item">
                  <img src={portadaNueve} alt="" />
                  <h3>Album name</h3>
                  <h5>Group</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumExplorer;
