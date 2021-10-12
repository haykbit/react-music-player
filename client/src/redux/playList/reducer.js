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
  FOLLOW_PLAYLIST_REQUEST,
  FOLLOW_PLAYLIST_SUCCESS,
  FOLLOW_PLAYLIST_FAIL,
  CANCEL_FOLLOW_PLAYLIST_REQUEST,
  CANCEL_FOLLOW_PLAYLIST_SUCCESS,
  CANCEL_FOLLOW_PLAYLIST_FAIL,
  GET_FAVORITE_PLAYLISTS_REQUEST,
  GET_FAVORITE_PLAYLISTS_SUCCESS,
  GET_FAVORITE_PLAYLISTS_FAIL,
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
    case FOLLOW_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        removeSongSuccess: false,
        followSuccess: false,
        cancelFollowSuccess: false,
        error: null,
      };
    case FOLLOW_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        followSuccess: true,
        error: null,
      };
    case FOLLOW_PLAYLIST_FAIL:
      return {
        ...state,
        loading: false,
        followSuccess: false,
        error: action.payload,
      };
    case CANCEL_FOLLOW_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        removeSongSuccess: false,
        followSuccess: false,
        cancelFollowSuccess: false,
        error: null,
      };
    case CANCEL_FOLLOW_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        cancelFollowSuccess: true,
        error: null,
      };
    case CANCEL_FOLLOW_PLAYLIST_FAIL:
      return {
        ...state,
        loading: false,
        cancelFollowSuccess: false,
        error: action.payload,
      };
    case GET_FAVORITE_PLAYLISTS_REQUEST:
      return {
        ...state,
        loading: true,
        playlistCreatedSuccess: false,
        addedToPlaylistSuccess: false,
        getMyPlaylistsSuccess: false,
        getFavoritePlaylistsSuccess: false,
        removeSongSuccess: false,
        followSuccess: false,
        cancelFollowSuccess: false,
        error: null,
      };
    case GET_FAVORITE_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        getFavoritePlaylistsSuccess: true,
        myFavoritePlaylists: action.payload,
        error: null,
      };
    case GET_FAVORITE_PLAYLISTS_FAIL:
      return {
        ...state,
        loading: false,
        getFavoritePlaylistsSuccess: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
