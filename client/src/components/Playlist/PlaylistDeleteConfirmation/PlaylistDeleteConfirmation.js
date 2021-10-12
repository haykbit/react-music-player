import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style/DeleteConfirmation.scss";
import { deleteSong } from "../../../redux/song/action";

const PlaylistDeleteConfirmation = ({ show, close, songId, userId }) => {
  const dispatch = useDispatch();

  function deleteSelectedSong() {
    dispatch(deleteSong(songId, userId));
    close();
  }

  return (
    <>
      {show ? (
        <div className="delete-modal-container" onClick={() => close()}>
          <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="delete-modal-title">
              Are you sure you want to delete this song permanently?
            </div>
            <div className="delete-modal-button-box">
              <button className="close" onClick={() => close()}>
                Cancel
              </button>
              <button
                className="submit"
                onClick={() => deleteSelectedSong(songId)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlaylistDeleteConfirmation;
