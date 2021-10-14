import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSearchEngine } from "../../redux/search/action";

import portadaUno from "../../assets/images/icons/portada-1.png";
import "./style/searchengine.scss";

function SearchEngine() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState();

  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    getSearch();
  }, []);

  async function getSearch() {
    const response = await dispatch(getSearchEngine());
    setResponse(response);
  }

  const result = {
    users: [
      { artist: "Juan Miguel", img: "x" },
      { artist: "Juan Miguel", img: "x" },
    ],
    songs: [
      { id: 0, name: "song-1", img: "x" },
      { id: 1, name: "song-2", img: "x" },
    ],
    playlists: [
      { id: 0, name: "playlist-1", url: "link" },
      { id: 1, name: "playlist-2", url: "link" },
    ],
  };

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setShow(true);
      console.log(response);
    } else setShow(false);
  };

  const cardStyle = {
    display: show ? "block" : "none",
  };

  return (
    <>
      <div className="search">
        <div
          className="circle"
          style={{
            backgroundImage: `url(${portadaUno})`,
            backgroundSize: "contain",
          }}
        ></div>
        <form>
          <input
            type="text"
            placeholder="Artistas, canciones o albums"
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </div>
      <div className="search_result" style={cardStyle}>
        <div className="result_container">
          <div className="artist_result">
            <h2>Artists results</h2>
          </div>
          <div className="song_result">
            <h2>Songs results</h2>
          </div>
        </div>
        <div className="playlist_result">
          <h2>Playlist results</h2>
        </div>
      </div>
    </>
  );
}

export default SearchEngine;
