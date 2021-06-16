import { SetTeacher } from "../tsTypes";
import { SET_ALL_CHAPTERS, SET_ALL_LECTURES_OF_COURSE, SET_COURSE, SET_NEW_CHAPTER, SET_TEACHER } from "./actionTypes";

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
  _id: string;
  title: string;
  description: string;
  image?: string;
  tags: Array<string>;
  authorId: string
}

export interface ILecture {
  url: string;
  title: string;
  chapterId: string;
  courseId: string;
  authorId?: string;
  _id: string;
}

export interface IChapter {
  courseId: string;
  _id: string;
  title: string;
  authorId?: string;
}

export interface TeacherState {
  teacher: ITeacher;
  allCourses: Array<ICourse>
  course: ICourse;
  newChapter: IChapter;
  allChapters: IChapter[];
  allLecturesOfCourse: ILecture[];
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
  _id: "",
  authorId: ""
}

export const initChapter: IChapter = {
  _id: "",
  title: "",
  courseId: "",
  authorId: ""
}

export const initLecture: ILecture = {
  title: "",
  url: "",
  authorId: "",
  courseId: "",
  chapterId: "",
  _id: ''
}


const initState: TeacherState = {
  teacher: initTeacher,
  allCourses: [],
  course: initCourse,
  newChapter: initChapter,
  allChapters: [],
  allLecturesOfCourse: []
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

    case SET_ALL_CHAPTERS: {
      return { ...state, allChapters: payload }
    }

    case SET_ALL_LECTURES_OF_COURSE: {
      return { ...state, allLecturesOfCourse: payload }
    }

    case SET_NEW_CHAPTER: {
      return { ...state, newChapter: payload }
    }

    default:
      return state
  }
};

export { teacherReducer };