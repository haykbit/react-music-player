import React from "react";
import "./style/rightClickMenu.scss";

function RightClickMenu({ show, close }) {
  return (
    <>
      {show ? (
        <div className="context-menu-container" onClick={() => close()}>
          <div className="context-menu" onClick={(e) => e.stopPropagation()}>
            <li>Add to favorites</li>
            <li>Edit</li>
            <li>Delete</li>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RightClickMenu;
