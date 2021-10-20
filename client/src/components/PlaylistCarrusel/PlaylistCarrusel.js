import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { displayPublicPlaylists } from "../../redux/playlist/action";
import { sortPublicPlaylistsByLikes } from "../../api/api";
import portadaUno from "../../assets/images/icons/portada-1.png";

import "./style/playlist.scss";

function PlaylistCarrusel() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sortedLists, setSortedLists] = useState([]);
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { publicPlaylists, getPublicPlaylistsSuccess } = useSelector(
    (state) => state.playlist
  );

  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getPopularPlaylists();
    }
  }, [loading, authObserverSuccess, stableDispatch]);

  async function getPopularPlaylists() {
    const popularPlaylists = await sortPublicPlaylistsByLikes();
    setSortedLists(popularPlaylists.data.data);
  }
  return (
    <>
      <div className="recomend-container">
        <h2 className="recomend-title">You may like</h2>
        <div className="recomend-list">
          <div className="scroll-container">
            <div className="scroll">
              {sortedLists
                ? sortedLists.map((playlist, index) => {
                    return (
                      <div
                        className="item-container"
                        key={index}
                        onClick={() =>
                          history.push(`/playlist/${playlist._id}`)
                        }
                      >
                        {/* <a href="/home-page" className="fill-div"> */}
                        <div
                          className="list-item"
                          style={{
                            backgroundImage: `url(${playlist.playlistImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="dark-back">
                            <div className="list-name">
                              <h1>{playlist.title}</h1>
                            </div>
                          </div>
                        </div>
                        {/* </a> */}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistCarrusel;
