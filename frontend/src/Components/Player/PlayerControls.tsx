import React from "react";
import styled from "styled-components";

interface IPlayerControlsProps {}

export default function PlayerControls({}: IPlayerControlsProps) {
  const handlePlayPauseVideo = () => {};

  return (
    <div>
      <ProgressBar></ProgressBar>
      <ControlButtonBox>
        <LeftButtonBox></LeftButtonBox>
        <RightButtonBox></RightButtonBox>
      </ControlButtonBox>
    </div>
  );
}

const Flex = styled.div``;

const ProgressBar = styled.div`
  height: 6px;
  margin: 10px;
  border: 1px solid red;
  border-radius: 3px;
  background-color: #fff;
`;

const ControlButtonBox = styled(Flex)``;

const LeftButtonBox = styled(Flex)``;

const RightButtonBox = styled(Flex)``;
