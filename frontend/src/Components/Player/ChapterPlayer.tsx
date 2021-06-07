import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTimeout } from "timers";
import { setCurrentTime, setVideoElem } from "../../store/currentVideo/actions";
import { setPlayerStatus } from "../../store/player/actions";
import { State } from "../../store/tsTypes";
import PlayerControls from "./PlayerControls";
import {
  handleOnMetadataLoaded,
  handleUpdateTime,
  playPauseVideo,
} from "./PlayerHelperFunction";

interface IChapterPlayerProps {
  videoUrl: string;
}

export default function ChapterPlayer({ videoUrl }: IChapterPlayerProps) {
  const { playerStatus } = useSelector((state: State) => state.player);
  const { videoElem, size } = useSelector((state: State) => state.currentVideo);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(false);

  const handleClickOnVideo = () => {
    playPauseVideo({ videoRef, dispatch });
  };

  const handleMouseOver: React.MouseEventHandler<HTMLDivElement> = (
    e
  ): void => {
    e.preventDefault();
    console.log("MouseOver called");
    document.fullscreenElement
      ? setIsControlsVisible(false)
      : setIsControlsVisible(true);
    // e.stopPropagation();
  };

  const handleMouseLeave = (): void => {
    console.log("MouseLeave called");

    console.log(document.fullscreenElement);
    setTimeout(() => {
      !videoRef.current?.paused && setIsControlsVisible(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    console.log("MouseMove called");

    document.fullscreenElement && setIsControlsVisible(true);
  };

  const handleResizeScreen = () => {
    document.fullscreenElement && setIsControlsVisible(false);
  };

  useEffect(() => {
    playPauseVideo({ videoRef, dispatch });
    dispatch(setVideoElem(videoRef));
    return () => {};
  }, []);

  return (
    <PlayerWrapper>
      <PlayerBox
        ref={videoWrapperRef}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <VideoWrapper
          onClick={handleClickOnVideo}
          size={size}
          onMouseMove={handleMouseMove}
        >
          <VideoElem
            ref={videoRef}
            crossOrigin="anonymous"
            preload="auto"
            onLoadedMetadata={(event) => {
              const target = event.target as HTMLVideoElement;
              // target.onfullscreenchange((event) => {});
              handleOnMetadataLoaded({
                target,
                dispatch,
              });
            }}
            onTimeUpdate={(e) => {
              const target = e.target as HTMLVideoElement;
              dispatch(setCurrentTime(target.currentTime));
            }}
            onEnded={(e) => {
              const target = e.target as HTMLVideoElement;
              dispatch(setPlayerStatus(false));
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </VideoElem>
        </VideoWrapper>

        {isControlsVisible && (
          <ControlsBox ref={controlsRef}>
            <PlayerControls
              videoContainer={videoWrapperRef}
              handleResizeScreen={handleResizeScreen}
            />
          </ControlsBox>
        )}
      </PlayerBox>
    </PlayerWrapper>
  );
}

interface VideoWrapperProps {
  size: string;
}

const PlayerWrapper = styled.div`
  /* border: 1px solid red; */
  padding-bottom: 10px;
  margin-top: 4.1rem;
`;

const PlayerBox = styled.div`
  /* border: 1px solid blue; */
  position: relative;
`;

const VideoWrapper = styled.div`
  height: ${({ size }: VideoWrapperProps) =>
    size === "small" ? "66.5vh" : "100vh"};
`;

const VideoElem = styled.video`
  /* border: 1px solid blue; */
  background-color: #000000;
  width: 100%;
  height: 100%;

  &::-webkit-media-controls {
    display: none !important;
  }
`;

const ControlsBox = styled.section`
  /* border: 1px solid green; */
  background-color: #000000a6;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 5px 0;
  z-index: 100;
`;
