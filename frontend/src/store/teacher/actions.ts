import { SET_TEACHER } from "./actionTypes"

export const setTeacher = (payload: string) => {
  return {
    type: SET_TEACHER,
    payload
  }
}