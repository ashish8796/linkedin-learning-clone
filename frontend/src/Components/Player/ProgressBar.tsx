import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/tsTypes";

interface IProgressBarProps {}

export default function ProgressBar({}: IProgressBarProps) {
  const { currentTime, duration, videoElem } = useSelector(
    (state: State) => state.currentVideo
  );
  const dispatch = useDispatch();

  return (
    <ProgressBarBox>
      <ProgressInput
        type="range"
        min={0}
        max={100}
        value={(currentTime / Math.floor(duration)) * 100}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          videoElem!.current!.currentTime = (+target.value * duration) / 100;
        }}
      />
    </ProgressBarBox>
  );
}

const ProgressBarBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8px;
`;

const ProgressInput = styled.input`
  width: 100%;
  appearance: none;
  /* background: none; */
  background-color: "#fff";
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  /* border: 1px solid red; */

  &:hover {
    padding: 4px 0;
    border-radius: 4px;
    transition: 0.3s ease-in-out;

    &::-webkit-slider-thumb {
      width: 14px;
      height: 14px;
      transition: 0.3s ease-in-out;
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background: #fff;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px #00000042;

    /* &:hover {
      width: 13px;
      height: 13px;
    } */
  }
`;
