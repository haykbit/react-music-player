import React, { useState, useEffect, useRef } from "react";
import { GiSoundWaves } from "react-icons/gi";
import { useSelector } from "react-redux";
import AudioControls from "./AudioControls";
import { fancyTimeFormat } from "../../util/timeFormatter";

import "./style/songbar.scss";

const AudioPlayer = () => {
  const { playSuccess, playlist, index } = useSelector((state) => state.player);

  const [trackIndex, setTrackIndex] = useState(index);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState("0.50");
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, url, duration, songImage } = playlist[trackIndex];

  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
        if (playlist.length === 1) {
          setTimeout(() => {
            audioRef.current.pause();
            setTrackProgress(0);
            audioRef.current.play();
          }, 2000);
        }
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
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
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioRef.current.play();
            startTimer();
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
    setTrackIndex(index);
    volumeControl(volumeLevel);

    if (isReady.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    } else {
      isReady.current = true;
    }
  }, [playSuccess, playlist, index]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
    volumeControl(volumeLevel);
    const playPromise = audioRef.current.play();

    if (isReady.current) {
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    } else {
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
