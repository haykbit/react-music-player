import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";

import IndividualSong from "../IndividualSong";
import { getPublicSongs } from "../../api/api";

import "./style/playlistnew.scss";

function GeneralList({ playlist, playlistGeneral }) {
  return (
    <>
      <div className="newlist-container">
        <section className="new-spain">
          <div className="new-title">
            <h2 className="recomend-title">Most listened</h2>
            <BsMusicNoteList className="icon-like" />
          </div>
          <div className="song-list">
            {playlist &&
              playlist.map((song, index) => {
                return (
                  <div className="song-container" key={index}>
                    <div className="song-list-playlist">
                      <IndividualSong
                        song={song}
                        key={song._id}
                        playlist={playlist}
                        index={index}
                        favorite={false}
                        playlistData={playlistGeneral}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="new-world">
          <div className="new-title">
            <h2 className="recomend-title">Most liked</h2>
            <FaRegHeart className="icon-like" />
          </div>
          <div className="song-list">
            {playlistGeneral &&
              playlistGeneral.map((song, index) => {
                return (
                  <div className="song-container" key={index}>
                    <div className="song-list-playlist">
                      <IndividualSong
                        song={song}
                        key={song._id}
                        playlist={playlist}
                        index={index}
                        favorite={false}
                        playlistData={playlistGeneral}
                      />
                    </div>
                  </div>
                  // <>
                  //   <div className="song-list" key={index}>
                  //     <div className="song-item" id="song-item">
                  //       <div className="song-info">
                  //         <div
                  //           className="song-cover"
                  //           style={{
                  //             backgroundImage: `url(${song.songImage})`,
                  //           }}
                  //         ></div>
                  //         <div className="song-name">
                  //           <h3>{song.title}</h3>
                  //           <h5>{song.album}</h5>
                  //         </div>
                  //       </div>

                  //       <div className="song-actions">
                  //         <div className="song-play">
                  //           <button>
                  //             <BsFillCaretRightFill className="play-icon" />
                  //           </button>
                  //         </div>
                  //         <div className="song-time">
                  //           <h4>{song.duration}</h4>
                  //         </div>
                  //         <div className="song-like">
                  //           <button>
                  //             <FaRegHeart className="like-icon" />
                  //           </button>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default GeneralList;
