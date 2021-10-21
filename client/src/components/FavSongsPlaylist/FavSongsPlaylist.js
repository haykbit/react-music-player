import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import PlaylistStack from "./FavPlaylistStack";
import { useSelector } from "react-redux";
import { FiUploadCloud } from "react-icons/fi";

import portadaUno from "../../assets/images/icons/portada-1.png";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";

import { getUserProfile } from "../../api/api";

function FavSongsPlaylist() {
  const [modal, setModal] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { cancelLikedSuccess } = useSelector((state) => state.song);
  const Toggle = () => setModal(!modal);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserData();
    }
  }, [loading, cancelLikedSuccess]);

  async function getUserData() {
    const userData = await getUserProfile(user.uid);
    setUserProfile(userData.data.data);
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
            <div className="relevant-title">Top 3 most relevant songs</div>
            <div className="relevant-songs">
              <div className="number">1</div>
              <div
                className="album-image"
                style={{
                  backgroundImage: `url(${portadaTres})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="relevant-song-name">
                {" "}
                Four Out Of Five
                <div className="relevant-song-artist">Arctic Monkeys</div>
              </div>
            </div>
            <div className="relevant-songs">
              <div className="number">2</div>
              <div
                className="album-image"
                style={{
                  backgroundImage: `url(${portadaDos})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
              </div>
              <div className="relevant-song-name">
                {" "}
                Brainstorm - Live
                <div className="relevant-song-artist">Arctic Monkeys</div>
              </div>
            </div>
            <div className="relevant-songs">
              <div className="number">3</div>
              <div
                className="album-image"
                style={{
                  backgroundImage: `url(${portadaCuatro})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="relevant-song-name">
                {" "}
                She's Thunderstorms
                <div className="relevant-song-artist">Arctic Monkeys</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FavSongsPlaylist;
