import { Dispatch } from "redux"
import { getUserById, postTeacher } from "../../api/api"
import { PostTeacher } from "../../api/apiTypes"
import { SetCourse } from "../tsTypes"
import { setUserById } from "../user/action"
import { SET_COURSE, SET_TEACHER } from "./actionTypes"

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
    const { data: teacherData } = await postTeacher(payload);
    await setUserById(payload.userId);

    console.log(teacherData)
    dispatch({ type: SET_TEACHER, payload: teacherData.chapter })
    return true;
  } catch (error) {
    return false
  }
}