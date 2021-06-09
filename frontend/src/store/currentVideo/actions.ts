import React from "react";
import { SetCurrentTime, SetDuration, SetVideoElem, SetVideoScreenSize } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION, SET_VIDEO_ELEM, SET_VIDEO_SCREEN_SIZE } from "./actionTypes";

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

export const setVideoScreenSize = (size: string): SetVideoScreenSize => {
  return {
    type: SET_VIDEO_SCREEN_SIZE,
    payload: size
  }
}