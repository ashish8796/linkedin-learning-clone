import { Dispatch } from "redux";
import { getCourse, getTeacher, postNewCourse } from "../../api/api"
import { SET_COURSE, SET_TEACHER } from "./actionTypes"

export const setTeacher = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getTeacher(id);

    console.log(data.teacher)

    dispatch({
      type: SET_TEACHER,
      payload: data.teacher
    })

  } catch (error) {

  }
}

export const setAllCourses = (id: string) => async (dispatch: Dispatch) => {
  try {
    // const { data } = 
  } catch (error) {

  }
}

export const setCourse = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getCourse(id);

    dispatch({ type: SET_COURSE, payload: data.course })
  }
  catch (error) { }
}

export const createNewCourse = (payload: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await postNewCourse(payload);
    console.log(data)

    dispatch({ type: SET_COURSE, payload: data.course })

    return true;
  } catch (error) {
    return false;
  }
}