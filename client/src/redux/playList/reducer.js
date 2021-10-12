import INITIAL_STATE from "./state";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAIL,
  GET_MY_PLAYLISTS_REQUEST,
  GET_MY_PLAYLISTS_SUCCESS,
  GET_MY_PLAYLISTS_FAIL,
  ADD_SONG_TO_PLAYLIST_REQUEST,
  ADD_SONG_TO_PLAYLIST_SUCCESS,
  ADD_SONG_TO_PLAYLIST_FAIL,
  REMOVE_SONG_REQUEST,
  REMOVE_SONG_SUCCESS,
  REMOVE_SONG_FAIL,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAIL,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYLIST_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        error: null,
      };
    case PLAYLIST_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        playlistCreatedSuccess: true,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        error: null,
      };
    case PLAYLIST_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        error: action.payload,
      };
    case GET_MY_PLAYLISTS_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        error: null,
      };
    case GET_MY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: true,
        myPlaylists: action.payload,
        error: null,
      };
    case GET_MY_PLAYLISTS_FAIL:
      return {
        ...state,
        loading: false,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        error: action.payload,
      };
    case REMOVE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        removeSongSuccess: false,
        error: null,
      };
    case REMOVE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        removeSongSuccess: true,
        error: null,
      };
    case REMOVE_SONG_FAIL:
      return {
        ...state,
        loading: false,
        removeSongSuccess: false,
        error: action.payload,
      };
    case DELETE_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
        deletePlaylistSuccess: false,
        error: null,
      };
    case DELETE_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        deletePlaylistSuccess: true,
        error: null,
      };
    case DELETE_PLAYLIST_FAIL:
      return {
        ...state,
        loading: false,
        deletePlaylistSuccess: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
