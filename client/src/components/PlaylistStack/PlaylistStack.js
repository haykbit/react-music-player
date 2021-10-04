import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
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
            <IndividualSong />
            <IndividualSong />
            <IndividualSong />
            <IndividualSong />
            <IndividualSong />
            <IndividualSong />
          </div>
        </section>
      </div>
    </>
  );
}

export default PlaylistStack;
