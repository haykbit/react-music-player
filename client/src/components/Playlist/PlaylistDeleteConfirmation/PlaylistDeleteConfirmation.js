import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style/DeleteConfirmation.scss";
import { deletePlaylist } from "../../../redux/playlist/action";
import { useHistory } from "react-router-dom";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";

const PlaylistDeleteConfirmation = ({ show, close, playlistId, userId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function deleteSelectedPlaylist() {
    try {
      dispatch(deletePlaylist(playlistId, userId));
      history.push("/my-playlists");
    } catch (err) {
      console.log(err.response.data);
    }
  }
  useLockBodyScroll();
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
                onClick={() => deleteSelectedPlaylist()}
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
