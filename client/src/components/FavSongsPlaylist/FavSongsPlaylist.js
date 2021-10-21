import React, { useState, useEffect } from "react";
import PlaylistStack from "./FavPlaylistStack";
import { useSelector } from "react-redux";
import { bestSongsByGenre } from "../../api/stats-api";
import { orderedTopLists } from "../../api/api";

import portadaUno from "../../assets/images/icons/portada-1.png";

import { getUserProfile } from "../../api/api";

function FavSongsPlaylist() {
  const [userProfile, setUserProfile] = useState([]);
  const [genreSongs, setGenreSongs] = useState(null);

  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { cancelLikedSuccess } = useSelector((state) => state.song);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserData();
      getBestSongs();
    }
  }, [loading, cancelLikedSuccess]);

  async function getUserData() {
    const userData = await getUserProfile(user.uid);
    setUserProfile(userData.data.data);
  }

  async function getBestSongs() {
    const top = await bestSongsByGenre("Rap");
    const cleanedList = top.data.data.map((song) => song.original_id);
    const songsByGenre = await orderedTopLists(cleanedList);
    setGenreSongs(songsByGenre.data.data);
  }

  return (
    <>
      {userProfile ? (
        <div className="my-playlist-body">
          <div className="left-side">
            <div className="playlist-title">
              <div
                className="album-column"
                style={{
                  backgroundImage: `url(${portadaUno})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="text-column">
                <h1 className="playlist-name">My Favorite Songs</h1>
                <h3 className="playlist-genre">
                  {userProfile.firstName} {userProfile.lastName}
                </h3>
                <p className="song-number">
                  {userProfile.myFavoriteSongs
                    ? userProfile.myFavoriteSongs.length
                    : "0"}{" "}
                  songs
                </p>
              </div>
            </div>
            <div className="song-stack">
              <PlaylistStack />
            </div>
          </div>
          <div className="right-side">
            {genreSongs ? (
              <>
                <div className="relevant-title">Top 3 Ska songs</div>
                {genreSongs.map((song) => {
                  return (
                    <>
                      <div className="relevant-songs" key={song._id}>
                        <div
                          className="album-image"
                          style={{
                            backgroundImage: `url(${song.songImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div className="relevant-song-name">
                          {" "}
                          {song.title}
                          <div className="relevant-song-artist">
                            {song.artist}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FavSongsPlaylist;
