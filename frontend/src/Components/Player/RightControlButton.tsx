import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setVideoScreenSize } from "../../store/currentVideo/actions";
import { State } from "../../store/tsTypes";
import CreateButton from "../Common/CreateButton";
import CreateIcon from "./../Common/CreateIcon/CreateIcon";

interface IRightControlButton {
  videoContainer: React.RefObject<HTMLDivElement>;
  handleResizeScreen: () => void;
}

export default function RightControlButton({
  videoContainer,
  handleResizeScreen,
}: IRightControlButton) {
  let { currentTime, videoElem, duration, size } = useSelector(
    (state: State) => state.currentVideo
  );
  const { isPlayed } = useSelector((state: State) => state.player.playerStatus);
  const dispatch = useDispatch();

  const handleResizeScreenBtn = (): void => {
    dispatch(setVideoScreenSize(size === "small" ? "big" : "small"));

    if (!document.fullscreenElement && videoContainer.current) {
      videoContainer.current.requestFullscreen().catch();
    } else {
      document.exitFullscreen();
    }

    handleResizeScreen();
  };

  return (
    <RightButtonBox>
      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/settingIcon.svg").default}
        />
      </CreateButton>

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={require("./../../assets/svgs/learning/soundOnIcon.svg").default}
        />
      </CreateButton>

      <CreateButton label="screen resize" handleClick={handleResizeScreenBtn}>
        <CreateIcon
          path={
            require(`./../../assets/svgs/learning/${
              size === "small" ? "fullscreenIcon.svg" : "exitFullscreenIcon.svg"
            }`).default
          }
        />
      </CreateButton>
    </RightButtonBox>
  );
}

const Flex = styled.div``;

const RightButtonBox = styled(Flex)`
  & > button {
    margin-left: 15px;
  }
`;
