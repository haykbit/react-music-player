import PLAYLST_STATE from "./state";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAIL,
  GET_MY_PLAYLIST_REQUEST,
  GET_MY_PLAYLIST_SUCCESS,
  GET_MY_PLAYLIST_FAIL,
  ADD_SONG_TO_PLAYLIST_REQUEST,
  ADD_SONG_TO_PLAYLIST_SUCCESS,
  ADD_SONG_TO_PLAYLIST_FAIL,
} from "./types";

const reducer = (state = PLAYLIST_STATE, action) => {
  switch (action.type) {
    case PLAYLIST_CREATE_REQUEST:
      return {
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        myPlaylistCreatedSuccess: false,
        error: null,
      };
    case PLAYLIST_CREATE_SUCCESS:
      return {
        playlistCreatedSuccess: true,
        addedToPlaylistSuccess: false,
        myPlaylistCreatedSuccess: false,
        error: null,
      };
  }
};
