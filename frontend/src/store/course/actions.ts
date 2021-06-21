import { Dispatch } from "redux";
import { postTeacher, getCourse } from "../../api/api";
import { PostTeacher } from "../../api/apiTypes";
import { SetCourse } from "../tsTypes";
import { SET_USER_BY_ID } from "../user/actionTypes";
import { SET_COURSE, SET_TEACHER, GET_COURSE_BY_ID_FAILURE, GET_COURSE_BY_ID_REQUEST, GET_COURSE_BY_ID_SUCCESS } from "./actionTypes";

export const setCourse = (id: string): SetCourse => {
  return {
    type: SET_COURSE,
    payload: id,
  };
};

// export const setTeacherByUniqueId = (id: string) => {
//   return{
//     type:
//   }
// }

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
    const { data: teacherData } = await postTeacher(payload);
    console.log(teacherData);

    // dispatch(setUserById(payload.userId));

    dispatch({ type: SET_TEACHER, payload: teacherData.teacher });
    dispatch({ type: SET_USER_BY_ID, payload: teacherData.user });

    return { status: true, id: teacherData.teacher._id };
  } catch (error) {
    return false;
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
