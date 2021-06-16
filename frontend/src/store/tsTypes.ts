import React from "react";
import { ICourseState } from "./course/courseReducer";
import { CurrentVideoState } from "./currentVideo/currentVideoReducer";
import { PlayerState } from "./player/playerReducer";
import { UserState } from "./user/userReducer";

export type State = {
  player: PlayerState;
  currentVideo: CurrentVideoState;
  course: ICourseState;
  user: UserState;
};

export type SetPlayerStatus = {
  type: string;

  payload: {
    isPlayed: boolean;
  };
};

export type SetDuration = {
  type: string;
  payload: number;
};

export type SetCurrentTime = {
  type: string;
  payload: number;
};

export type SetVideoElem = {
  type: string;
  payload: React.RefObject<HTMLVideoElement>;
};

export type SetVideoScreenSize = {
  type: string;
  payload: string;
};

export type SetVideoUrl = {
  type: string;
  payload: string;
};

export type SetCourse = {
  type: string;
  payload: string;
};

export type SetTeacher = {
  type: string;
  payload: string;
};
