import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import { getPublicSongs } from "../../api/api";

import "./style/playlistnew.scss";

function GeneralList({ playlist, playlistGeneral }) {
  return (
    <>
      <div className="newlist-container">
        <section className="new-spain">
          <h2 className="recomend-title">New songs Spain</h2>
          <div className="song-list">
            {playlist.map((song, index) => {
              <>
                <div className="song-list" key={index}>
                  <div className="song-item" id="song-item">
                    <div className="song-info">
                      <div className="song-cover"></div>
                      <div className="song-name">
                        <h3>{song.title}</h3>
                        <h5>{song.album}</h5>
                      </div>
                    </div>

                    <div className="song-actions">
                      <div className="song-play">
                        <button>
                          <BsFillCaretRightFill className="play-icon" />
                        </button>
                      </div>
                      <div className="song-time">
                        <h4>{song.duration}</h4>
                      </div>
                      <div className="song-like">
                        <button>
                          <FaRegHeart className="like-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>;
            })}
          </div>
        </section>
        <section className="new-world">
          <h2 className="recomend-title">New songs Europe</h2>
          <div className="song-list">
            {playlistGeneral.map((song, index) => {
              return (
                <>
                  <div className="song-list" key={index}>
                    <div className="song-item" id="song-item">
                      <div className="song-info">
                        <div className="song-cover"></div>
                        <div className="song-name">
                          <h3>{song.title}</h3>
                          <h5>{song.album}</h5>
                        </div>
                      </div>

                      <div className="song-actions">
                        <div className="song-play">
                          <button>
                            <BsFillCaretRightFill className="play-icon" />
                          </button>
                        </div>
                        <div className="song-time">
                          <h4>{song.duration}</h4>
                        </div>
                        <div className="song-like">
                          <button>
                            <FaRegHeart className="like-icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default GeneralList;
