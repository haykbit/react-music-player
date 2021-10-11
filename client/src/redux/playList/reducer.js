import INITIAL_STATE from "./state";
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

const reducer = (state = INITIAL_STATE, action) => {
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
    case PLAYLIST_CREATE_FAIL:
      return {
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        myPlaylistCreatedSuccess: false,
        error: action.payload,
      };
    case ADD_SONG_TO_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        addToPlaylistFromPlaylistViewSuccess: false,
        canceladdToPlaylistFromPlaylistView: false,
        UploadToPlaylistFromPlaylistView: false,
        PlaylistData: null,
      };
    case ADD_SONG_TO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        addToPlaylistFromPlaylistViewSuccess: true,
        canceladdToPlaylistFromPlaylistView: false,
      };
    case ADD_SONG_TO_PLAYLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        addToPlaylistFromPlaylistViewSuccess: false,
        canceladdToPlaylistFromPlaylistView: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
