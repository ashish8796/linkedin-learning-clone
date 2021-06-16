import { SetTeacher } from "../tsTypes";
import { SET_COURSE, SET_TEACHER } from "./actionTypes";

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

export interface ICourse {
  title: string;
  description: string;
  image?: string;
  tags: Array<string>;
}

export interface TeacherState {
  teacher: ITeacher;
  allCourses: Array<ICourse>
  course: ICourse;
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

export const initCourse: ICourse = {
  title: "",
  description: "",
  tags: [],
  image: "",
}


const initState: TeacherState = {
  teacher: initTeacher,
  allCourses: [],
  course: initCourse,
}

type MainAction = SetTeacher

function teacherReducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    case SET_TEACHER:
      {
        return { ...state, teacher: payload }
      }

    case SET_COURSE: {
      return { ...state, course: payload }
    }

    default:
      return state
  }
};

export { teacherReducer };