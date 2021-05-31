import React from "react";
import styled from "styled-components";
import LeftControlButton from "./LeftControlButton";
import RightControlButton from "./RightControlButton";

interface IPlayerControlsProps {}

export default function PlayerControls({}: IPlayerControlsProps) {
  const handlePlayPauseVideo = () => {};

  return (
    <PlyerControlsWrapper>
      <ProgressBar>
        <Dot></Dot>
      </ProgressBar>
      <ControlButtonBox>
        <LeftControlButton />
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

const ProgressBar = styled(Flex)`
  height: 5px;
  margin: 10px 0;
  padding-top: 1px;
  /* border: 1px solid red; */
  border-radius: 2px;
  background-color: #fff;
  position: relative;
  align-items: center;
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
