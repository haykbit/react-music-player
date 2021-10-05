import React from "react";
import "./style/modal.scss";
import UploadIcon from "../../assets/images/icons/upload-icon.png";

const Modal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="modal-container" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Upload Song</div>
            <div className="modal-input-box">
              <input placeholder="Song Title" />
            </div>
            <div className="modal-input-box">
              <input placeholder="Song Artist" />
            </div>
            <div className="modal-input-box">
              <input placeholder="Song Album" />
            </div>
            <div className="modal-input-box">
              <input placeholder="Song Genre" />
            </div>
            <label>
              <div className="modal-image-box">
                <div
                  className="upload-icon"
                  style={{
                    backgroundImage: `url(${UploadIcon})`,
                  }}
                ></div>
              </div>
            </label>
            <div className="modal-button-box">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
