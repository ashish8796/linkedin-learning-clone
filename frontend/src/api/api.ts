import Axios from "axios";

const axios = Axios.create({
  headers: {
    "Content-Type": "application/json"
  }
})

export const getData = () => {
  return axios.get("/")
}