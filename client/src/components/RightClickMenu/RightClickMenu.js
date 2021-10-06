import React, { useState } from "react";
import { getCurrentUser } from "../../services/auth";
import "./style/rightClickMenu.scss";
import Modal from "../Modal";
import DeleteConfirmation from "../DeleteConfirmation";

function RightClickMenu({ show, close, handleLike, song }) {
  const [modals, setModals] = useState({
    editModal: false,
    deleteModal: false,
  });

  const userUid = getCurrentUser().uid;

  const ToggleEditModal = () =>
    setModals({ ...modals, editModal: !modals.editModal });

  const ToggleDeleteModal = () =>
    setModals({ ...modals, deleteModal: !modals.deleteModal });

  async function editHandle() {
    ToggleEditModal();
  }

  async function deleteHandle() {
    ToggleDeleteModal();
  }

  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => close()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            <li onClick={() => handleLike()}>Add to favorites</li>
            {song.owner === userUid ? (
              <>
                <li onClick={editHandle}>Edit</li>
                <li onClick={deleteHandle}>Delete</li>
              </>
            ) : (
              ""
            )}
          </div>
          <Modal show={modals.editModal} close={ToggleEditModal} />
          <DeleteConfirmation
            show={modals.deleteModal}
            close={ToggleDeleteModal}
            songId={song._id}
          />
        </div>
      ) : null}
    </>
  );
}

export default RightClickMenu;
