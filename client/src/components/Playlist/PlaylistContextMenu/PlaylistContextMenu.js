import React, { useState } from "react";
import { getCurrentUser } from "../../../services/auth";
import "./style/rightClickMenu.scss";

function PlaylistContextMenu({
  show,
  closeMenu,
  handleLike,
  playlist,
  ToggleDeleteModal,
  ToggleEditModal,
}) {
  const userUid = getCurrentUser().uid;

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
            {playlist.owner === userUid ? (
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

                <li
                  className="menu-option-box"
                  onClick={() => {
                    deleteHandle();
                    closeMenu();
                  }}
                >
                  Delete
                </li>
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

export default PlaylistContextMenu;
