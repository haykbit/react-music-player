import React, { useState } from "react";
import { getCurrentUser } from "../../services/auth";
import "./style/rightClickMenu.scss";
import Modal from "../Modal";
import SongEditModal from "../UploadedSongsPlaylist/SongEditModal";

function RightClickMenu({
  show,
  closeMenu,
  handleLike,
  song,
  ToggleDeleteModal,
  ToggleEditModal,
  ToggleAddToPlaylist,
  modals,
}) {
  // const [modals, setModals] = useState({
  //   editModal: false,
  //   deleteModal: false,
  // });

  const userUid = getCurrentUser().uid;

  // const ToggleEditModal = () =>
  //   setModals({ ...modals, editModal: !modals.editModal });

  // const ToggleDeleteModal = () =>
  //   setModals({ ...modals, deleteModal: !modals.deleteModal });

  async function editHandle() {
    ToggleEditModal();
  }

  async function deleteHandle() {
    ToggleDeleteModal();
  }

  function handleAddSong() {
    ToggleAddToPlaylist();
    closeMenu();
  }
  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => closeMenu()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            <div className="menu-option-box" onClick={() => handleLike()}>
              Favorite
            </div>
            <div className="menu-option-box" onClick={() => handleAddSong()}>
              Add Song
            </div>
            {song.owner === userUid ? (
              <>
                <div
                  className="menu-option-box"
                  onClick={() => {
                    editHandle();
                    closeMenu();
                  }}
                >
                  Edit
                </div>

                <div
                  className="menu-option-box"
                  onClick={() => {
                    deleteHandle();
                    closeMenu();
                  }}
                >
                  Delete
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RightClickMenu;
