import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchMySongsData } from "../../redux/song/action";
import { getMySongsData } from "../../api/api";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import IndividualSong from "../IndividualSong/index";
import "./style/playlistStack.scss";

function PlaylistStack() {
  const dispatch = useDispatch();
  const { user, loading, authObserverSuccess } = useSelector(
    (state) => state.auth
  );
  const { uploadSongSuccess } = useSelector((state) => state.song);
  const [mySongsData, setMySongsData] = useState([]);
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      songData();
    }
  }, [loading, uploadSongSuccess]);

  async function songData() {
    const mySongs = await getMySongsData(user.uid);
    setMySongsData(mySongs.data.data);
    dispatch(dispatchMySongsData());
  }

  return (
    <>
      <div className="song-container">
        <section className="new-spain">
          <div className="song-list-playlist">
            {mySongsData.map((song) => {
              return <IndividualSong song={song} key={song._id} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default PlaylistStack;
