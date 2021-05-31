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

  const handleClickOnVideo = () => {
    dispatch(setPlayerStatus(!playerStatus.isPlayed));

    if (videoRef.current) {
      playerStatus.isPlayed
        ? videoRef.current.pause()
        : videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          dispatch(setPlayerStatus(true));
        })
        .catch((reason) => {
          console.log(reason);
        });
    }

    return () => {};
  }, []);

  return (
    <PlayerWrapper>
      <PlayerBox onClick={handleClickOnVideo}>
        <VideoWrapper>
          <VideoElem ref={videoRef} crossOrigin="anonymous" preload="auto">
            <source src={videoUrl} type="video/mp4" />
          </VideoElem>

          <ControlsBox>
            <PlayerControls />
          </ControlsBox>
        </VideoWrapper>
      </PlayerBox>
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.div`
  /* border: 1px solid red; */
`;

const PlayerBox = styled.div`
  /* border: 1px solid blue; */
`;

const VideoWrapper = styled.div`
  position: relative;
`;

const VideoElem = styled.video`
  border: 1px solid blue;
  width: 100%;
`;

const ControlsBox = styled.section`
  border: 1px solid green;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;
