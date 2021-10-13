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
  const { playSuccess, playlist, index } = useSelector((state) => state.player);

  // TODO get song data from now playing
  // State
  const [trackIndex, setTrackIndex] = useState(index);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState("0.50");
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, url, duration, songImage } = playlist[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness

  /* const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"; */

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
      setTrackIndex(playlist.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < playlist.length - 1) {
      setTrackIndex((prev) => prev + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Getting the right song on play
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
    setTrackIndex(index);
    volumeControl(volumeLevel);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Next song is ready
      isReady.current = true;
    }
  }, [playSuccess, playlist, index]);

  // Restart state for next song
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
    volumeControl(volumeLevel);

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
              src={songImage}
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
