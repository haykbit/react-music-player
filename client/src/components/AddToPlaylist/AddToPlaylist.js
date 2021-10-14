import React from "react";
import "./style/addToPlaylist.scss";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

function AddToPlaylist({ show, close, text = "" }) {
  useLockBodyScroll();
  return (
    <>
      {show ? (
        <div className="add-to-playlist-container" onClick={() => close()}>
          <div
            className="add-to-playlist-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="add-to-playlist-title">
              {" "}
              <p>{text}</p>
              <p>Songs</p>
            </div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
            <div className="playlists-list-box"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AddToPlaylist;
