import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentTime, setVideoElem } from "../../store/currentVideo/actions";
import { setPlayerStatus } from "../../store/player/actions";
import { State } from "../../store/tsTypes";
import PlayerControls from "./PlayerControls";
import {
  handleOnMetadataLoaded,
  handleUpdateTime,
  playPauseVideo,
} from "./PlayerHelperFunction";
import VideoLoader from "./VideoLoader";

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
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(false);
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClickOnVideo = () => {
    playPauseVideo({ videoRef, dispatch });
  };

  const handleMouseOver: React.MouseEventHandler<any> = (e): void => {
    const target = e.target as HTMLVideoElement | HTMLDivElement;

    if (target.id === "custom-controls") {
      setIsControlsVisible(true);
    }
  };

  const handleMouseLeave = (): void => {
    setTimeout(() => {
      !videoRef.current?.paused && setIsControlsVisible(false);
    }, 3000);
  };

  const handleMouseMove: React.MouseEventHandler<HTMLVideoElement> = (e) => {
    const target = e.target as HTMLVideoElement;

    if (document.fullscreenElement) {
      if (target.id === "chapter-video") {
        if (!isControlsVisible) {
          setIsControlsVisible(true);
          timeOutRef.current = null;
        } else if (!timeOutRef.current) {
          timeOutRef.current = setTimeout(() => {
            setIsControlsVisible(false);
          }, 3000);
        }
      }
    } else {
      setIsControlsVisible(true);
    }
  };

  const handleResizeScreen = () => {
    setIsControlsVisible(false);
  };

  useEffect(() => {
    playPauseVideo({ videoRef, dispatch });
    dispatch(setVideoElem(videoRef));

    return () => {};
  }, []);

  return (
    <PlayerWrapper>
      {isVideoLoading && <VideoLoader />}
      <PlayerBox ref={videoWrapperRef}>
        <VideoWrapper onClick={handleClickOnVideo} size={size}>
          <VideoElem
            onPlaying={(e) => {
              setIsVideoLoading(false);
            }}
            onWaiting={(e) => {
              setIsVideoLoading(true);
            }}
            onMouseMove={handleMouseMove}
            id="chapter-video"
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

              setIsVideoLoading(false);
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
          <ControlsBox
            ref={controlsRef}
            id="custom-controls"
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
          >
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
  position: relative;
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
