import React, { useState, useEffect, useRef } from "react";
import { GiSoundWaves } from "react-icons/gi";
import { MdPlaylistAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import AudioControls from "./AudioControls";
import { fancyTimeFormat } from "../../util/timeFormatter";
import imageSong from "../../assets/images/albums/arctic-album-3.jpeg";
import imageSong1 from "../../assets/images/albums/arctic-album-2.jpeg";
import imageSong2 from "../../assets/images/albums/arctic-album-1.jpeg";
import song1 from "../../assets/music/InYourHands.mp3";
import song2 from "../../assets/music/NeonLights.mp3";
import song3 from "../../assets/music/ReturningHome.mp3";

import "./style/songbar.scss";

const AudioPlayer = () => {
  const { songData } = useSelector((state) => state.player);

  const tracks = [
    {
      title: "Cali",
      artist: "Wataboi",
      audioSrc: song1,
      image: imageSong,
      color: "#00aeb0",
    },
    {
      title: "50",
      artist: "tobylane",
      audioSrc: song2,
      image: imageSong1,
      color: "#ffb77a",
    },
    {
      title: "I Wonder",
      artist: "DreamHeaven",
      audioSrc: song3,
      image: imageSong2,
      color: "#5f9fff",
    },
  ];
  // TODO get song data from now playing
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState("0.50");
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, url, duration } = songData;

  // Refs
  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  // const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
    audioRef.current.volume = 0;
  };

  const volumeControl = (e) => {
    setVolumeLevel(e);
    audioRef.current.volume = e;
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
    audioRef.current.volume = volumeLevel;
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    console.log("TRACK INDEX: ", trackIndex);
    console.log("TRACKS LENGTH: ", tracks.length);
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      console.log(audioRef);
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Restart state for next song
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Next song is ready
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {url ? (
        <div className="audio-player">
          <div className="track-info">
            <img
              className="artwork"
              // src={image}
              alt={`${title} by ${artist}`}
            />
            <div className="song-info">
              <h4 className="title">{title}</h4>
              <h6 className="artist">{artist}</h6>
            </div>
            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
            <div className="track-bar">
              <h4>{fancyTimeFormat(duration)}</h4>
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="progress"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                style={{ background: trackStyling }}
              />
              <h4>{fancyTimeFormat(trackProgress)}</h4>
            </div>
            <MdPlaylistAdd className="add-icon" />
            <GiSoundWaves className="volume-icon" />
            <input
              type="range"
              value={volumeLevel}
              step="0.05"
              min="0.00"
              max="1.00"
              className="volume"
              onChange={(e) => volumeControl(e.target.value)}
              style={{ background: trackStyling }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AudioPlayer;
