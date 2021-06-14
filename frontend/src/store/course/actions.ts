import { Dispatch } from "redux"
import { postTeacher } from "../../api/api"
import { PostTeacher } from "../../api/apiTypes"
import { SetCourse } from "../tsTypes"
import { SET_COURSE } from "./actionTypes"

export const setCourse = (id: string): SetCourse => {
  return {
    type: SET_COURSE,
    payload: id
  }
}

export const setTeacher = (id: string) => {

}

export const addTeacher = (payload: any) => async (dispatch: Dispatch) => {
  console.log(payload)
  try {
    const { data } = await postTeacher(payload);
    console.log(data)
    return true;
  } catch (error) {
    return false
  }
}