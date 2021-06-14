import { SetCourse } from "../tsTypes"
import { SET_COURSE } from "./actionTypes"

export const setCourse = (id: string): SetCourse => {
  return {
    type: SET_COURSE,
    payload: id
  }
}