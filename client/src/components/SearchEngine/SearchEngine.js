import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  getSearchArtist,
  getSearchPlaylist,
  getSearchSong,
} from "../../api/api";

import { getSearchEngine } from "../../redux/search/action";
import { getSongPlayNow } from "../../redux/player/action";

import portadaUno from "../../assets/images/icons/portada-1.png";
import search from "../../assets/images/icons/search2.png";
import "./style/searchengine.scss";

function SearchEngine() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showButton, setshowButton] = useState(true);
  const [response, setResponse] = useState(null);
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
  }, [loading, url]);

  async function getSearch() {
    const res = await dispatch(getSearchEngine(user.uid));
    setResponse(res);
  }

  const handleSearch = (e) => {
    let query = e.target.value;
    let songs, artists, playlists;

    if (response) {
      songs = response["song"]["data"]["data"];
      artists = response["artist"]["data"]["data"];
      playlists = response["playlist"]["data"]["data"];
    }

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
    } else if (e.target.value.length === 0) {
      setShow(false);
    } else {
      setShow(false);
    }
  };

  function playSearchedSong(song) {
    dispatch(getSongPlayNow(song, [song], 0));
  }

  const handleShow = (a) => {
    setShowSearch(!a);
    setshowButton(a);
  };

  const handleHideSearch = (a) => {
    setShow(false);
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

  const cardStyle = {
    display: show ? "block" : "none",
  };

  function artistProfile(id) {
    window.location.replace(`/playlist-user/${id}`);
  }

  function playlistPage(id) {
    window.location.replace(`/playlist/${id}`);
  }

  return (
    <>
      {url === "/artist" && (
        <div
          className="artist-search"
          style={searchButtonStyle}
          onMouseEnter={() => handleShowSearch(!showButton)}
        >
          <img src={search} alt="Search" />
        </div>
      )}
      <div
        className="nav-style"
        style={
          url === "/artist" ? searchStyle : { width: "100%", display: "flex" }
        }
        onMouseLeave={() =>
          url === "/artist" ? handleShow(showSearch) : handleHideSearch(false)
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
              placeholder="Artists, songs or albums"
              onChange={(e) => handleSearch(e)}
              onMouseEnter={(e) => handleSearch(e)}
            />
          </form>
        </div>
        <div className="search_result" style={cardStyle}>
          <div className="result_container">
            <div className="artist_result">
              <h2>Artists results</h2>
              <div className="scroll_list">
                {artist.length > 0 ? (
                  artist.map((artist, index) => {
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
                          <div className="artist_result_card_info" key={index}>
                            <h4>{artist.userName}</h4>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <>
                    <div>Can't find any results</div>
                  </>
                )}
              </div>
            </div>
            <div className="song_result">
              <h2>Songs results</h2>
              <div className="scroll_list">
                {song.length > 0
                  ? song.map((song, index) => {
                      return (
                        <>
                          <div
                            className="song_result_card"
                            key={song._id}
                            onClick={() => playSearchedSong(song)}
                          >
                            <img src={song.songImage} alt={song.title} />
                            <div className="song_result_card_info" key={index}>
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
                playlist.map((playlist, index) => {
                  return (
                    <>
                      <div
                        key={playlist._id}
                        className="playlist_result_card"
                        style={{
                          backgroundImage: `url(${playlist.playlistImage})`,
                        }}
                        onClick={() => playlistPage(playlist._id)}
                      >
                        <div className="playlist_result_card_info" key={index}>
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
