import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortPublicPlaylistsByLikes } from "../../api/api";
import { GiLoveSong } from "react-icons/gi";

import "./style/playlist.scss";

function PlaylistCarrusel() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sortedLists, setSortedLists] = useState([]);
  const { loading, authObserverSuccess } = useSelector((state) => state.auth);

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
        <div className="recomend-title">
          <h2 className="title">You may like</h2>
          <GiLoveSong className="recomend-icon" />
        </div>
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
