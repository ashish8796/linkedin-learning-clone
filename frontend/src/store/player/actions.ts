import { SetPlayerStatus } from "../tsTypes"
import { SET_PLAYER_STATUS } from "./actionTypes"

export const setPlayerStatus = (payload: boolean): SetPlayerStatus => {
  return {
    type: SET_PLAYER_STATUS,
    payload: {
      isPlayed: payload
    }
  }
}