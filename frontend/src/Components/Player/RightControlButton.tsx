import React from "react";
import styled from "styled-components";
import CreateButton from "../Common/CreateButton";
import CreateIcon from "./../Common/CreateIcon/CreateIcon";

export default function RightControlButton() {
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

      <CreateButton label="str" handleClick={() => {}}>
        <CreateIcon
          path={
            require("./../../assets/svgs/learning/fullscreenIcon.svg").default
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
