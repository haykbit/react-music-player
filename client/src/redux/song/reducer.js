import INITIAL_STATE from "./state";

import {
  POST_SONG_REQUEST,
  POST_SONG_SUCCESS,
  POST_SONG_FAIL,
  GET_MY_SONGS_REQUEST,
  GET_MY_SONGS_SUCCESS,
  GET_MY_SONGS_FAIL,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
  LIKE_SONG_REQUEST,
  LIKE_SONG_SUCCESS,
  LIKE_SONG_FAIL,
  CANCEL_LIKED_SONG_REQUEST,
  CANCEL_LIKED_SONG_SUCCESS,
  CANCEL_LIKED_SONG_FAIL,
  GET_MY_LIKED_SONGS_REQUEST,
  GET_MY_LIKED_SONGS_SUCCESS,
  GET_MY_LIKED_SONGS_FAIL,
  ORDER_MY_SONGS_REQUEST,
  ORDER_MY_SONGS_SUCCESS,
  ORDER_MY_SONGS_FAIL,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        songData: action.payload,
        uploadSongSuccess: false,
      };
    case POST_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadSongSuccess: true,
        error: null,
        songData: null,
      };
    case POST_SONG_FAIL:
      return {
        ...state,
        loading: false,
        uploadSongSuccess: false,
        error: action.payload,
        songData: null,
      };
    case GET_MY_SONGS_REQUEST:
      return {
        ...state,
        getSongsSuccess: false,
        loading: true,
        error: null,
        // songData: null,
      };
    case GET_MY_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        getSongsSuccess: true,
        // songData: action.payload,
      };
    case GET_MY_SONGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        getSongsSuccess: false,
        // songData: null,
      };
    case UPDATE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        songData: action.payload,
        songUpdated: false,
      };
    case UPDATE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        //have my doubts on keeping the songData -->
        songData: action.payload,
        songUpdated: true,
      };
    case UPDATE_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
        songUpdated: false,
      };
    case LIKE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        likSongSuccess: false,
        cancelLikedSuccess: false,
        uploadSongSuccess: false,
        songData: null,
      };
    case LIKE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        likeSongSuccess: true,
        cancelLikedSuccess: false,
      };
    case LIKE_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        likeSongSuccess: false,
        cancelLikedSuccess: false,
      };
    case CANCEL_LIKED_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        likeSongSuccess: false,
        cancelLikedSuccess: false,
        uploadSongSuccess: false,
        songData: null,
      };
    case CANCEL_LIKED_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cancelLikedSuccess: true,
      };
    case CANCEL_LIKED_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        cancelLikedSuccess: false,
      };
    case GET_MY_LIKED_SONGS_REQUEST:
      return {
        ...state,
        myLikedSongsSuccess: false,
        loading: true,
        error: null,
        songData: null,
      };
    case GET_MY_LIKED_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        myLikedSongsSuccess: true,
      };
    case GET_MY_LIKED_SONGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        myLikedSongsSuccess: false,
      };
    case ORDER_MY_SONGS_REQUEST:
      return {
        ...state,
        orderSongsSuccess: false,
        error: null,
      };
    case ORDER_MY_SONGS_SUCCESS:
      return {
        ...state,
        orderSongsSuccess: true,
        error: null,
      };
    case ORDER_MY_SONGS_FAIL:
      return {
        ...state,
        orderSongsSuccess: false,
        error: action.payload,
      };
    case DELETE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        deleteSongSuccess: false,
        songData: null,
      };
    case DELETE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleteSongSuccess: true,
        songData: null,
      };
    case DELETE_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        deleteSongSuccess: false,
        songData: null,
      };
    default:
      return { ...state };
  }
};

export default reducer;
