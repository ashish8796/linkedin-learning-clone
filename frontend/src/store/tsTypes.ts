import { CurrentVideoState } from "./currentVideo/currentVideoReducer"
import { PlayerState } from "./player/playerReducer"

export type State = {
  player: PlayerState;
  currentVideo: CurrentVideoState
}

export type SetPlayerStatus = {
  type: string;

  payload: {
    isPlayed: boolean;
  }
}

export type SetDuration = {
  type: string;
  payload: number
}

export type SetCurrentTime = {
  type: string;
  payload: number;
}
