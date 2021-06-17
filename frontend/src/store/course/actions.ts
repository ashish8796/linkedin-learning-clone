import { Dispatch } from "redux"
import { getCourse, postTeacher } from "../../api/api"
import { PostTeacher } from "../../api/apiTypes"
import { SetCourse } from "../tsTypes"
import { GET_COURSE_BY_ID_FAILURE, GET_COURSE_BY_ID_REQUEST, GET_COURSE_BY_ID_SUCCESS, SET_COURSE } from "./actionTypes"

export const setCourse = (id: string): SetCourse => {
  return {
    type: SET_COURSE,
    payload: id
  }
}

export const setTeacher = (id: string) => {

}

const getCourseByIdRequest = ()=>{
  return {
    type: GET_COURSE_BY_ID_REQUEST
  }
}

const getCourseByIdSuccess = (payload: any)=>{
  return {
    type: GET_COURSE_BY_ID_SUCCESS,
    payload
  }
}

const getCourseByIdFailure = (err: any)=>{
  return {
    type: GET_COURSE_BY_ID_FAILURE,
    payload: err
  }
}

export const addTeacher = (payload: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await postTeacher(payload);
    console.log(data)
    return true;
  } catch (error) {
    return false
  }
}

export const getCourseById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(getCourseByIdRequest());

    await getCourse(id)
    .then((res: any) => {
      dispatch(getCourseByIdSuccess(res.data));
    })
    .catch((err: any)=>{
      dispatch(getCourseByIdFailure(err));
    })
  }
  catch (err) {
    console.log(err);
  }
}