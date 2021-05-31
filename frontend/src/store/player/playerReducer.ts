import { SetPlayerStatus } from "../tsTypes";
import { SET_PLAYER_STATUS } from "./actionTypes";

export interface PlayerState {
  playerStatus: {
    isPlayed: boolean;
  }
}

const initState: PlayerState = {
  playerStatus: {
    isPlayed: false
  }
}

type MainAction = SetPlayerStatus

function playerReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_PLAYER_STATUS: {
      return {
        ...state, playerStatus: {
          ...state.playerStatus, ...payload,
        }
      }
    }

    default:
      return state;
  }
}

export { playerReducer };

