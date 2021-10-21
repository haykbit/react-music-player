import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";

import IndividualSong from "../IndividualSong";

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
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default GeneralList;
