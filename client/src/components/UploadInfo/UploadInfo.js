import React from "react";
import "./style/uploadinfo.scss";
import Button from "../Buttons/index";
import { BiEdit } from "react-icons/bi";

function UploadInfo() {
  return (
    <div className="upload-info">
      <div className="text-row">
        <h2>Upload Information</h2>
      </div>
      <div className="content">
        <div className="top-row">
          <div className="sub-info">
            <div>
              <h3>Data upload</h3>
              <p>7.23 GB</p>
            </div>
            <div className="subscription-label">
              <h3>Songs</h3>
              <p>1380</p>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <Button className="edit-btn" label="Edit" children="Edit">
            <BiEdit className="button-icon" />
            Delete all songs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UploadInfo;
