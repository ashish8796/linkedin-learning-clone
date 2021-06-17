
import { SetCourse } from "../tsTypes"
import { GET_COURSE_BY_ID_FAILURE, GET_COURSE_BY_ID_REQUEST, GET_COURSE_BY_ID_SUCCESS, SET_COURSE } from "./actionTypes";

export interface ICourseState {
  courseId: string;
  course: any;
  isLoading: boolean;
  isError: boolean;
}

const initState: ICourseState = {
  courseId: "",
  course: {},
   isLoading: false,
   isError: false
}

type MainAction = SetCourse

function courseReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_COURSE: {
      return { ...state, courseId: payload }
    }
    case GET_COURSE_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case GET_COURSE_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        course: payload
      }
    }
    case GET_COURSE_BY_ID_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    default:
      return state;
  }

}

export { courseReducer }