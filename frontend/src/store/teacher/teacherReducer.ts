import { SetTeacher } from "../tsTypes";
import { SET_TEACHER } from "./actionTypes";

export interface TeacherState {
  DOB: string;
  createdAt: string;
  description: string;
  linkedInProfile: string;
  qualification: string[];
  specializations: Array<String>;
  uniqueId: string;
  updatedAt: string;
  _id: string;
}

const initState: TeacherState = {
  DOB: "",
  createdAt: "",
  description: "",
  linkedInProfile: "",
  qualification: [],
  specializations: [],
  uniqueId: "",
  updatedAt: "",
  _id: "",
}

type MainAction = SetTeacher

function teacherReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_TEACHER:

      { return state }

    default:
      return state
  }
};

export { teacherReducer };