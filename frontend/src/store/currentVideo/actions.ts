import React from "react";
import { SetCurrentTime, SetDuration, SetVideoElem } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION, SET_VIDEO_ELEM } from "./actionTypes";

export const setDuration = (duration: number): SetDuration => {
  return {
    type: SET_DURATION,
    payload: duration
  }
}

export const setCurrentTime = (time: number): SetCurrentTime => {
  return {
    type: SET_CURRENT_TIME,
    payload: time
  }
}

export const setVideoElem = (elem: React.RefObject<HTMLVideoElement>): SetVideoElem => {
  return {
    type: SET_VIDEO_ELEM,
    payload: elem
  }
}