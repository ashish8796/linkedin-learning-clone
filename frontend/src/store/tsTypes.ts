import { PlayerState } from "./player/playerReducer"

export type State = {
  player: PlayerState;
}

export type SetPlayerStatus = {
  type: string;
  payload: {
    isPlayed: boolean;
  }
}

