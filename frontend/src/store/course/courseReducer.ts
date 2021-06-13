
import { SetCourse } from "../tsTypes"
import { SET_COURSE } from "./actionTypes";

export interface ICourseState {
  courseId: string;

}

const initState: ICourseState = {
  courseId: "",
}

type MainAction = SetCourse

function courseReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_COURSE: {
      return { ...state, courseId: payload }
    }

    default:
      return state;
  }

}

export { courseReducer }