import React from "react";
import { SetCurrentTime, SetDuration, SetVideoElem, SetVideoScreenSize, SetVideoUrl } from "../tsTypes";
import { SET_CURRENT_LECTURE_INDEX, SET_CURRENT_TIME, SET_DURATION, SET_VIDEO_ELEM, SET_VIDEO_SCREEN_SIZE, SET_VIDEO_URL } from "./actionTypes";

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

export const setVideoUrl = (url: string): SetVideoUrl => {
  return {
    type: SET_VIDEO_URL,
    payload: url
  }

}

export const setCurrentVideoIndex = (index: number) => {
  return {
    type: SET_CURRENT_LECTURE_INDEX, payload: index
  }
}