import { SetTeacher } from "../tsTypes";
import { SET_TEACHER } from "./actionTypes";

export interface ITeacher {
  DOB?: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  description: string;
  linkedInProfile: string;
  qualification: string[];
  specializations: Array<String>;
  uniqueId: string;
  updatedAt: string;
  image?: string;
  _id: string;
}

export interface TeacherState {
  teacher: ITeacher
}

export const initTeacher: ITeacher = {
  DOB: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  description: "",
  linkedInProfile: "",
  qualification: [],
  specializations: [],
  uniqueId: "",
  updatedAt: "",
  image: "",
  _id: "",
}


const initState: TeacherState = {
  teacher: initTeacher
}

type MainAction = SetTeacher

function teacherReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_TEACHER:
      {
        return { ...state, teacher: payload }
      }

    default:
      return state
  }
};

export { teacherReducer };