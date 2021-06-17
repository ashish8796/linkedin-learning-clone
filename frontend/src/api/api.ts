import Axios, { AxiosResponse } from "axios";
import { PostTeacher } from "./apiTypes";
import { IRegister } from "../Components/Register/Register";
import { ILogin } from "../Components/SignIn/SignIn";


const axios = Axios.create({
  baseURL: "http://localhost:5000",

  headers: {
    "Content-Type": "application/json",
  },
});

export const postTeacher = (payload: any) => {
  return axios.post("/add-teacher", payload, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export const getTeacher = (id: string): Promise<AxiosResponse<any>> => {
  return axios.get(`/get-teacher/${id}`)
}


//Course related requests
export const getCourse = (id: string): Promise<any> => {
  return axios.get(`/get-course/${id}`)
}

export const postNewCourse = (payload: any) => {
  return axios.post("/add-course", payload)
}

export const getAllCoursesOfTeacher = (id: string) => {

  // return axios.get()
}

//Chapter related requests
export const getAllChaptersByCourseId = (id: string) => {
  return axios.get(`/getChapterNCourse/${id}`)
}

export const postNewChapter = (payload: any) => {
  return axios.post("/add-chapter", payload)
}

export const deleteChapterById = (id: string) => {
  return axios.delete(`/delete-chapter/${id}`)
}

//Video related requests
export const getVideosByChapterId = (id: string) => {
  return axios.get("/");
};

export const postNewLecture = (payload: any) => {
  return axios.post("/add-video", payload)
}

export const deleteLectureById = (id: any) => {
  return axios.delete(`/delete-video/${id}`)
}


export const registerUsers = (payload: IRegister) => {
  return axios.post("/register", payload);
};



export const loginUsers = (payload: ILogin) => {
  return axios.post("/login", payload);
};

export const putSubscribeUser = (userId: string, payload: any) => {
  return axios.put(`/update-user/${userId}`, payload);
};

export const getUserDetailsByEmail = (payload: string) => {
  return axios.get(`/get-user-detail/${payload}`)
};
