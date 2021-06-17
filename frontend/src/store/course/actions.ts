import { Dispatch } from "redux";
import { getUserById, postTeacher } from "../../api/api";
import { PostTeacher } from "../../api/apiTypes";
import { SetCourse } from "../tsTypes";
import { setUserById } from "../user/action";
import { SET_USER_BY_ID } from "../user/actionTypes";
import { SET_COURSE, SET_TEACHER } from "./actionTypes";

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

export const addTeacher = (payload: any) => async (dispatch: Dispatch<any>) => {
  console.log(payload);
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
};
