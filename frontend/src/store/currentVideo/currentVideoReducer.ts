import React from "react";
import { SetCurrentTime, SetDuration, SetVideoElem } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION, SET_VIDEO_ELEM } from "./actionTypes";

export interface CurrentVideoState {
  duration: number;
  currentTime: number;
  videoElem: React.RefObject<HTMLVideoElement> | null;
}

const initState: CurrentVideoState = {
  duration: 100,
  currentTime: 0,
  videoElem: null
}

type MainAction = SetDuration | SetCurrentTime | SetVideoElem;

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

    default:
      return state;
  }

}

export { currentVideoReducer }