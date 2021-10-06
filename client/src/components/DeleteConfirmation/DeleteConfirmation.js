import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style/DeleteConfirmation.scss";
import { deleteSong } from "../../redux/song/action";

const DeleteConfirmation = ({ show, close, songId, userId }) => {
  const dispatch = useDispatch();

  function deleteSelectedSong() {
    dispatch(deleteSong(songId, userId));
    close();
  }

  return (
    <>
      {show ? (
        <div className="modal-container" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              Are you sure you want to delete this song permanently?
            </div>
            <div className="modal-button-box">
              <button onClick={() => close()}>Cancel</button>
              <button onClick={() => deleteSelectedSong(songId)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteConfirmation;
