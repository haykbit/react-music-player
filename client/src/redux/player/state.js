const INITIAL_STATE = {
  songData: {
    title: "",
    artist: "",
    duration: 0,
    url: "",
  },
  playlist: [
    {
      title: "",
      artist: "",
      duration: 0,
      url: "",
    },
  ],
  index: 0,
  loading: false,
  error: null,
  playSuccess: false,
  playNextSuccess: false,
  playPrevSuccess: false,
};

export default INITIAL_STATE;
