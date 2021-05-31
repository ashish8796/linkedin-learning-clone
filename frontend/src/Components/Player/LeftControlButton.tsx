import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlayerStatus } from "../../store/player/actions";
import { State } from "../../store/tsTypes";
import CreateButton from "../Common/CreateButton";
import CreateIcon from "./../Common/CreateIcon/CreateIcon";

export default function LeftControlButton() {
  const { isPlayed } = useSelector((state: State) => state.player.playerStatus);
  const dispatch = useDispatch<Dispatch<any>>();

  const handlePlayPauseVideo = (): void => {
    dispatch(setPlayerStatus(!isPlayed));
  };

  return (
    <LeftButtonBox>
      <CreateButton label="str" handleClick={handlePlayPauseVideo}>
        <CreateIcon
          path={
            require(`./../../assets/svgs/learning/${
              isPlayed ? "pauseIcon.svg" : "playIcon.svg"
            }`).default
          }
        />
      </CreateButton>

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={
            require("./../../assets/svgs/learning/backwardIcon.svg").default
          }
        />
      </CreateButton>

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/forwardIcon.svg").default}
        />
      </CreateButton>

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/backIcon.svg").default}
        />
      </CreateButton>

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/nextIcon.svg").default}
        />
      </CreateButton>
    </LeftButtonBox>
  );
}

const Flex = styled.div``;

const LeftButtonBox = styled(Flex)`
  & > button {
    margin-right: 15px;
  }
`;
