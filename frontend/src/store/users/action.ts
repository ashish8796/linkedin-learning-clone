import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://localhost:5000/"
});

interface payload {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const registerUserRequest  = ()=>{
    return {
        type: REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = (payload:any)=>{
    return {
        type: REGISTER_USER_SUCCESS,
         payload
    }
}

const registerUserFailure = ()=>{
    return {
        type: REGISTER_USER_FAILURE
    }
}

export const registerUser = (userData: payload)=>(dispatch:any)=>{
    dispatch(registerUserRequest());

    const config = {
        method: 'POST',
        url: '/register',
        data: userData
    }
    axios(config)
    .then(res=>{
        dispatch(registerUserSuccess(res))
    })
}