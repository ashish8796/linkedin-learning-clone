import React, { Dispatch } from 'react'
import { setDuration } from '../../store/currentVideo/actions';
import { setPlayerStatus } from '../../store/player/actions';


interface PlayPauseVideo {
  videoRef: React.RefObject<HTMLVideoElement> | null;
  dispatch: Dispatch<any>
}

export function playPauseVideo({ videoRef, dispatch }: PlayPauseVideo): void {

  if (videoRef?.current?.duration === videoRef?.current?.currentTime) {
    return
  }

  if (videoRef?.current) {
    videoRef.current.paused
      ? videoRef.current
        .play()
        .then(() => {
          dispatch(setPlayerStatus(true));
          console.log("Called second")
        })
        .catch((error) => {
          console.log(error);
          dispatch(setPlayerStatus(false));
        })
      : videoRef.current.pause();

    videoRef.current.paused && dispatch(setPlayerStatus(false));
  }
}

interface HandleMetadataLoaded {
  target: HTMLVideoElement;
  dispatch: Dispatch<any>
}

export const handleOnMetadataLoaded = ({ target, dispatch }: HandleMetadataLoaded) => {
  const { duration } = target;
  console.log(duration)

  dispatch(setDuration(duration))
}

interface HandleUpdateTime {
  target: HTMLVideoElement;
  dispatch: Dispatch<any>;
}

export function handleUpdateTime({ target, dispatch }: HandleUpdateTime): void {
  console.log(target.currentTime)
}