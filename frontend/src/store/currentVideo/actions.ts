import { SetCurrentTime, SetDuration } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION } from "./actionTypes";

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