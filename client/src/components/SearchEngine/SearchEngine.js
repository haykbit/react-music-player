import { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSearchEngine } from "../../redux/search/action";

import portadaUno from "../../assets/images/icons/portada-1.png";
import search from "../../assets/images/icons/search2.png";
import "./style/searchengine.scss";

function SearchEngine() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [artistPage, setArtistPage] = useState(true);
  const [showButton, setshowButton] = useState(true);
  const [response, setResponse] = useState();

  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    getSearch();
  }, []);

  async function getSearch() {
    const res = await dispatch(getSearchEngine());
    setResponse(res);
    console.log(res);
  }

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const cardStyle = {
    display: show ? "block" : "none",
  };

  const handleShow = (a) => {
    setShowSearch(!a);
    setshowButton(a);
  };

  const searchStyle = {
    display: showSearch ? "flex" : "none",
    width: "100%",
  };

  const handleShowSearch = (a) => {
    setshowButton(a);
    handleShow(a);
  };

  const searchButtonStyle = {
    display: showButton ? "flex" : "none",
    width: "5%",
  };
  let url = window.location.pathname;

  return (
    <>
      {url === "/artist" && (
        <div
          className="artist-search"
          style={searchButtonStyle}
          onMouseEnter={() => handleShowSearch(!showButton)}
        >
          <img src={search} width="30px" height="30px" />
        </div>
      )}
      <div
        style={
          url === "/artist" ? searchStyle : { width: "100%", display: "flex" }
        }
        onMouseLeave={() => (url === "/artist" ? handleShow(showSearch) : null)}
      >
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
      </div>
    </>
  );
}

export default SearchEngine;
