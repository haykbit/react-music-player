import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import RightClickMenu from "../RightClickMenu";

function IndividualSong() {

 
  };
  return (
    <div className="song-item-playlist">
      <div className="song-info">
        <div className="song-cover"></div>
        <div className="song-name">
          <h3>Coldplay</h3>
          <h5>Noches en vela</h5>
        </div>
      </div>
      <div>
        <button className="context-menu" >
          <IoMdMore />
        </button>
        <RightClickMenu />
      </div>
      <div className="song-actions">
        <div className="song-play">
          <button>
            <BsFillCaretRightFill className="play-icon" />
          </button>
        </div>
        <div className="song-time">
          <h4>4:23</h4>
        </div>
        <div className="song-like">
          <button>
            <FaRegHeart className="like-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualSong;
