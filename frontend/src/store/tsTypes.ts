import React from "react"
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

export type SetVideoElem = {
  type: string;
  payload: React.RefObject<HTMLVideoElement>;
}

export type SetVideoScreenSize = {
  type: string;
  payload: string;
}