import Axios from "axios";
import { PostTeacher } from "./apiTypes";
import { IRegister } from "../Components/Register/Register";
import { ILogin } from '../Components/SignIn/SignIn';

const axios = Axios.create({
  baseURL: "http://localhost:5000",

  headers: {
    "Content-Type": "application/json",
  }
})

export const postTeacher = (payload: any) => {

  return axios.post("/add-teacher", payload, {
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}

export const getData = () => {
  return axios.get("/")
}

export const registerUsers = (payload: IRegister) => {
  return axios.post('/register', payload)
}

export const loginUsers = (payload: ILogin) => {
  return axios.post('/login', payload)
}

export const getUserDetailsByEmail = (payload: string) =>{
  return axios.get(`/get-user-detail/${payload}`)
}