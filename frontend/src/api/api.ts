import Axios from "axios";
import { IRegister } from "../Components/Register/Register";
import { ILogin } from '../Components/SignIn/SignIn';

const axios = Axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json"
    }
})

export const getData = () => {
    return axios.get("/")
}

export const registerUsers = (payload: IRegister) =>{
    return axios.post('/register', payload)
}

export const loginUsers = (payload: ILogin) =>{
    return axios.post('/login', payload)
}