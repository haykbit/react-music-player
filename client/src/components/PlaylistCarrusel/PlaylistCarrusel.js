import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authObserverLoading } from "../../redux/auth/action";
import { displayPublicPlaylists } from "../../redux/playlist/action";
import portadaUno from "../../assets/images/icons/portada-1.png";
import { GiLoveSong } from "react-icons/gi";

import "./style/playlist.scss";

function PlaylistCarrusel() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { user, loading, authObserverSuccess, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const { publicPlaylists, getPublicPlaylistsSuccess } = useSelector(
    (state) => state.playlist
  );

  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    if (!loading && authObserverSuccess) {
      stableDispatch(displayPublicPlaylists(user.uid));
    }
  }, [loading, authObserverSuccess, stableDispatch]);

  return (
    <>
      <div className="recomend-container">
        <div className="recomend-title">
          <h2 className="title">You may like</h2>
          <GiLoveSong className="recomend-icon" />
        </div>
        <div className="recomend-list">
          <div className="scroll-container">
            <div className="scroll">
              {publicPlaylists
                ? publicPlaylists.map((playlist, index) => {
                    return (
                      <div className="item-container" key={index}>
                        <a href="/home-page" className="fill-div">
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
                        </a>
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
