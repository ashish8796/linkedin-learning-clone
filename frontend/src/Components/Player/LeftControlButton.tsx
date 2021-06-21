import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentVideoIndex } from "../../store/currentVideo/actions";
import { setPlayerStatus } from "../../store/player/actions";
import { State } from "../../store/tsTypes";
import CreateButton from "../Common/CreateButton";
import CreateIcon from "./../Common/CreateIcon/CreateIcon";
import { playPauseVideo } from "./PlayerHelperFunction";

interface ILeftControlButtonProps {
  handleMoveVideo: React.MouseEventHandler<HTMLButtonElement>;
}

export default function LeftControlButton({
  handleMoveVideo,
}: ILeftControlButtonProps) {
  const { isPlayed } = useSelector((state: State) => state.player.playerStatus);
  const { currentTime, videoElem, duration, index } = useSelector(
    (state: State) => state.currentVideo
  );
  const dispatch = useDispatch<Dispatch<any>>();

  const handlePlayPauseVideo = (): void => {
    if (videoElem?.current) {
      playPauseVideo({ videoRef: videoElem, dispatch });
    }

    if (videoElem?.current && currentTime === duration) {
      videoElem.current.currentTime = 0;
      playPauseVideo({ videoRef: videoElem, dispatch });
    }
  };

  const handelChangeVideoBtn: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    const { name } = e.target as HTMLButtonElement;

    if (name === "next") {
      dispatch(setCurrentVideoIndex(index + 1));
    } else {
      dispatch(setCurrentVideoIndex(index - 1));
    }
  };

  return (
    <LeftButtonBox>
      <CreateButton label="str" handleClick={handlePlayPauseVideo}>
        <CreateIcon
          path={
            require(`./../../assets/svgs/learning/${
              videoElem.current.paused ? "playIcon.svg" : "pauseIcon.svg"
            }`).default
          }
        />
      </CreateButton>

      <CreateButton
        label="backward"
        handleClick={handleMoveVideo}
        name="backward"
      >
        <CreateIcon
          path={
            require("./../../assets/svgs/learning/backwardIcon.svg").default
          }
          iconName="backward"
        />
      </CreateButton>

      <CreateButton
        label="forward"
        name="forward"
        handleClick={handleMoveVideo}
      >
        <CreateIcon
          path={require("./../../assets/svgs/learning/forwardIcon.svg").default}
          iconName="forward"
        />
      </CreateButton>

      <CreateButton label="s" name="next" handleClick={handelChangeVideoBtn}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/backIcon.svg").default}
        />
      </CreateButton>

      <CreateButton
        label="str"
        handleClick={handelChangeVideoBtn}
        name="previous"
      >
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
