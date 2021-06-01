import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/tsTypes";
import LeftControlButton from "./LeftControlButton";
import { playPauseVideo } from "./PlayerHelperFunction";
import ProgressBar from "./ProgressBar";
import RightControlButton from "./RightControlButton";

interface IPlayerControlsProps {
  // time: number;
}

export default function PlayerControls({}: IPlayerControlsProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const {
    duration,
    currentTime: time,
    videoElem,
  } = useSelector((state: State) => state.currentVideo);

  const dispatch = useDispatch();

  const handleMoveVideo: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    const target = e.target as HTMLElement;

    if (videoElem?.current) {
      videoElem.current.currentTime =
        time <= duration
          ? target.id === "forward"
            ? time + 10
            : time - 10
          : duration;

      // if (time === duration) {
      //   playPauseVideo({ videoRef: videoElem, dispatch });
      // }
    }
  };

  useEffect(() => {}, []);

  return (
    <PlyerControlsWrapper>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <ControlButtonBox>
        <LeftControlButton handleMoveVideo={handleMoveVideo} />

        <RightControlButton />
      </ControlButtonBox>
    </PlyerControlsWrapper>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PlyerControlsWrapper = styled(Flex)`
  /* border: 1px solid red; */
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  & > div {
    width: 100%;
  }
`;

const ProgressBarContainer = styled(Flex)`
  margin: 10px 0;
  /* position: relative; */
`;

const ControlButtonBox = styled(Flex)`
  /* border: 1px solid blue; */
  padding: 5px 0;
`;
