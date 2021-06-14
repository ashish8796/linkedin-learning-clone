import Axios from "axios";
import { PostTeacher } from "./apiTypes";

const axios = Axios.create({
  baseURL: "http://localhost:5000",

  headers: {
    "Content-Type": "application/json",
  }
})

export const postTeacher = (payload: any) => {
  // console.log(payload)
  // const image = payload.image as FormData;

  // // @ts-ignore
  // delete payload.image;

  // return axios.post("/add-teacher", {
  //   // @ts-ignore
  //   image,
  //   ...payload
  // })

  return axios.post("/add-teacher", payload, {
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}

