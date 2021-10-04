import React from "react";
import IndividualSong from "../IndivualSong/index";
import "./style/playlistStack.scss";

function PlaylistStack() {
  return (
    <>
      <div className="song-container">
        <section className="new-spain">
          <div className="song-list-playlist">
            {/*SONG ITEM*/}
            <IndividualSong />
          </div>
        </section>
      </div>
    </>
  );
}

export default PlaylistStack;
