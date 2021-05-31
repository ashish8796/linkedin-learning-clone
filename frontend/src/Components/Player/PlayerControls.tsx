import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/tsTypes";
import LeftControlButton from "./LeftControlButton";
import RightControlButton from "./RightControlButton";

interface IPlayerControlsProps {
  // time: number;
}

export default function PlayerControls({}: IPlayerControlsProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const { duration, currentTime: time } = useSelector(
    (state: State) => state.currentVideo
  );
  const [count, setCount] = useState(1);

  window.onresize = (e) => {
    setCount(count + 1);
    console.log();
  };

  console.log(window.innerWidth);

  console.log(progressRef?.current?.offsetWidth);
  useEffect(() => {}, []);

  const handlePlayPauseVideo = () => {};

  return (
    <PlyerControlsWrapper>
      <ProgressBar
        time={time}
        duration={duration}
        ref={progressRef}
        elem={progressRef.current}
      >
        <Dot></Dot>
      </ProgressBar>

      <ControlButtonBox>
        <LeftControlButton />

        <RightControlButton />
      </ControlButtonBox>
    </PlyerControlsWrapper>
  );
}

interface ProgressBarProps {
  time: number;
  duration: number;
  elem: HTMLDivElement | null;
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

const ProgressBar = styled(Flex)`
  height: 5px;
  margin: 10px 0;
  padding-top: 1px;
  /* border: 1px solid red; */
  border-radius: 2px;
  background-color: #fff;
  position: relative;
  align-items: center;

  & > div {
    left: ${({ time, duration, elem }: ProgressBarProps) =>
      ((elem ? elem.offsetWidth - 10 : 0) / duration) * time}px;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* border: 1px solid red; */
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00000042;
`;

const ControlButtonBox = styled(Flex)`
  /* border: 1px solid blue; */
  padding: 5px 0;
`;
