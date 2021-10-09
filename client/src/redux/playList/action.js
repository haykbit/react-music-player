import { createPlaylists } from "../../api/api";
import { uploadImages } from "../../services/cloudinary";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
} from "./types";

export const createNewPlaylist = (playlistData, image) => async (dispatch) => {
  dispatch({ type: PLAYLIST_CREATE_REQUEST });
  try {
    const imageData = await uploadImages(image);
    const playlist = {
      ...playlistData,
      image: imageData.url,
    };
    dispatch({ type: PLAYLIST_CREATE_SUCCESS });
    await createPlaylists(playlist);
  } catch (error) {
    dispatch({ type: PLAYLIST_CREATE_FAIL });
  }
};
