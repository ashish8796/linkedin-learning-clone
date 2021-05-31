import { SetCurrentTime, SetDuration } from "../tsTypes";
import { SET_CURRENT_TIME, SET_DURATION } from "./actionTypes";

export interface CurrentVideoState {
  duration: number;
  currentTime: number;
}

const initState: CurrentVideoState = {
  duration: 0,
  currentTime: 0,
}

type MainAction = SetDuration | SetCurrentTime;

function currentVideoReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_DURATION:
      {
        return { ...state, duration: payload }
      }

    case SET_CURRENT_TIME: {
      return { ...state, currentTime: payload }
    }

    default:
      return state;
  }

}

export { currentVideoReducer }