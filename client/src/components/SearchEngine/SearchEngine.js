import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchEngine } from "../../redux/search/action";
import { getSongPlayNow } from "../../redux/player/action";
import { useHistory } from "react-router";

import portadaUno from "../../assets/images/icons/portada-1.png";
import search from "../../assets/images/icons/search2.png";
import "./style/searchengine.scss";

function SearchEngine() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showButton, setshowButton] = useState(true);
  const [response, setResponse] = useState({});
  const [song, setSong] = useState({});
  const [artist, setArtist] = useState({});
  const [playlist, setPlaylist] = useState({});

  let url = window.location.pathname;

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getSearch();
    }
  }, [loading]);

  async function getSearch() {
    const res = await dispatch(getSearchEngine(user.uid));
    console.log(res);
    setResponse(res);
  }

  const handleSearch = (e) => {
    let songs = response["song"]["data"]["data"];
    let artists = response["artist"]["data"]["data"];
    let playlists = response["playlist"]["data"]["data"];
    let query = e.target.value;

    if (e.target.value.length > 0) {
      setShow(true);
      const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase())
      );
      const filteredPlaylists = playlists.filter((playlist) =>
        playlist.title.toLowerCase().includes(query.toLowerCase())
      );
      const filteredArtists = artists.filter((artist) =>
        artist.userName.toLowerCase().includes(query.toLowerCase())
      );
      setSong(filteredSongs);
      setPlaylist(filteredPlaylists);
      setArtist(filteredArtists);
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

  function artistProfile(id) {
    history.push(`playlist-user/${id}`);
  }

  function playSearchedSong(song) {
    dispatch(getSongPlayNow(song, [song], 0));
  }

  function playlistPage(id) {
    history.push(`playlist/${id}`);
  }

  return (
    <>
      {url === "/artist" && (
        <div
          className="artist-search"
          style={searchButtonStyle}
          onMouseEnter={() => handleShowSearch(!showButton)}
        >
          <img src={search} />
        </div>
      )}
      <div
        style={
          url === "/artist" ? searchStyle : { width: "100%", display: "flex" }
        }
        onMouseLeave={() =>
          url === "/artist" ? handleShow(showSearch) : handleShow(showSearch)
        }
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
              <div className="scroll_list">
                {artist.length > 0 ? (
                  artist.map((artist) => {
                    return (
                      <>
                        <div
                          key={artist.firebase_id}
                          className="artist_result_card"
                          onClick={() => artistProfile(artist.firebase_id)}
                        >
                          <img
                            src={artist.profileImage}
                            alt={artist.userName}
                          />
                          <div className="artist_result_card_info">
                            <h4>{artist.userName}</h4>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <>
                    <div className="artist_result_card">
                      <img src={portadaUno} alt="" />
                      <div className="artist_result_card_info">
                        <h5>Artist Name</h5>
                      </div>
                    </div>
                    <div className="artist_result_card">
                      <img src={portadaUno} alt="" />
                      <div className="artist_result_card_info">
                        <h5>Artist Name</h5>
                      </div>
                    </div>
                    <div className="artist_result_card">
                      <img src={portadaUno} alt="" />
                      <div className="artist_result_card_info">
                        <h5>Artist Name</h5>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="song_result">
              <h2>Songs results</h2>
              <div className="scroll_list">
                {song.length > 0
                  ? song.map((song) => {
                      return (
                        <>
                          <div
                            className="song_result_card"
                            key={song._id}
                            onClick={() => playSearchedSong(song)}
                          >
                            <img src={song.songImage} alt={song.title} />
                            <div className="song_result_card_info">
                              <h4>{song.title}</h4>
                              <h6>{song.genre}</h6>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="playlist_result">
            <h2>Playlist results</h2>
            <div className="scroll_list">
              {playlist.length > 0 ? (
                playlist.map((playlist) => {
                  return (
                    <>
                      <div
                        className="playlist_result_card"
                        style={{
                          backgroundImage: `url(${playlist.playlistImage})`,
                        }}
                        onClick={() => playlistPage(playlist._id)}
                      >
                        <div className="playlist_result_card_info">
                          <h4>{playlist.title}</h4>
                          <h6>{playlist.genre}</h6>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <h4>No Data</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchEngine;
