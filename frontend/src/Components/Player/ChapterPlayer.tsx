import React, { LegacyRef, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlayerStatus } from "../../store/player/actions";
import { State } from "../../store/tsTypes";
import PlayerControls from "./PlayerControls";

interface IChapterPlayerProps {
  videoUrl: string;
}

export default function ChapterPlayer({ videoUrl }: IChapterPlayerProps) {
  // console.log(videoUrl);
  const { playerStatus } = useSelector((state: State) => state.player);
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isPlayed, setIsPlayed] = useState<boolean>(false);

  function playPauseVideo() {
    console.log("Play Pause is called");

    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current
            .play()
            .then(() => {
              dispatch(setPlayerStatus(true));
            })
            .catch((error) => {
              console.log(error);
              dispatch(setPlayerStatus(false));
            })
        : videoRef.current.pause();
    }
  }

  const handleClickOnVideo = () => {
    dispatch(setPlayerStatus(!playerStatus.isPlayed));
  };

  useEffect(() => {
    playPauseVideo();

    return () => {};
  }, [playerStatus.isPlayed]);

  return (
    <PlayerWrapper>
      <PlayerBox>
        <VideoWrapper onClick={handleClickOnVideo}>
          <VideoElem ref={videoRef} crossOrigin="anonymous" preload="auto">
            <source src={videoUrl} type="video/mp4" />
          </VideoElem>
        </VideoWrapper>

        <ControlsBox>
          <PlayerControls />
        </ControlsBox>
      </PlayerBox>
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.div`
  /* border: 1px solid red; */
  padding-bottom: 10px;
`;

const PlayerBox = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  /* padding-bottom: 10px; */
  /* border-bottom: 3rem solid black; */
`;

const VideoWrapper = styled.div``;

const VideoElem = styled.video`
  /* border: 1px solid blue; */
  width: 100%;
`;

const ControlsBox = styled.section`
  /* border: 1px solid green; */
  background-color: #000000a6;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 5px 0;
`;
