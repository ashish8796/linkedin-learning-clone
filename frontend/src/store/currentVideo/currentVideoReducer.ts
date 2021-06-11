import React from "react";
import { SetCurrentTime, SetDuration, SetVideoElem, SetVideoScreenSize } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION, SET_VIDEO_ELEM, SET_VIDEO_SCREEN_SIZE } from "./actionTypes";

export interface CurrentVideoState {
  duration: number;
  currentTime: number;
  videoElem: React.RefObject<HTMLVideoElement> | any;
  size: string;
}

const initState: CurrentVideoState = {
  duration: 100,
  currentTime: 0,
  videoElem: null,
  size: "small"
}

type MainAction = SetDuration | SetCurrentTime | SetVideoElem | SetVideoScreenSize;

function currentVideoReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_DURATION:
      {
        return { ...state, duration: payload }
      }

    case SET_CURRENT_TIME: {
      return { ...state, currentTime: payload }
    }

    case SET_VIDEO_ELEM: {
      return { ...state, videoElem: payload }
    }

    case SET_VIDEO_SCREEN_SIZE: {
      return { ...state, size: payload }
    }

    default:
      return state;
  }

}

export { currentVideoReducer }