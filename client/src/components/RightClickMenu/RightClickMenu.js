import React, { useState } from "react";
import { getCurrentUser } from "../../services/auth";
import "./style/rightClickMenu.scss";
import Modal from "../Modal";
import SongEditModal from "../SongEditModal";
import DeleteConfirmation from "../DeleteConfirmation";

function RightClickMenu({
  show,
  closeMenu,
  handleLike,
  song,
  ToggleDeleteModal,
  ToggleEditModal,
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

  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => closeMenu()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            <li className="menu-option-box" onClick={() => handleLike()}>
              Favorite
            </li>
            {song.owner === userUid ? (
              <>
                <li
                  className="menu-option-box"
                  onClick={() => {
                    editHandle();
                    closeMenu();
                  }}
                >
                  Edit
                </li>

                <li className="menu-option-box" onClick={deleteHandle}>
                  Delete
                </li>
              </>
            ) : (
              ""
            )}
          </div>

          <DeleteConfirmation
            show={modals.deleteModal}
            close={ToggleDeleteModal}
            songId={song._id}
            userId={userUid}
          />
        </div>
      ) : null}
    </>
  );
}

export default RightClickMenu;
