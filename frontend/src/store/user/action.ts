import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:5000/'
})

interface userData {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
}

const registerUserRequest = ()=>{
    return {
        type: REGISTER_USER_REQUEST
    }
}
const registerUserSuccess = (payload: any)=>{
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}
const registerUserFailure = (err: any)=>{
    return {
        type: REGISTER_USER_FAILURE,
        payload: err
    }
}

export const registerUser = (payload: any)=> async (dispatch: any)=>{
    console.log(payload)
    dispatch(registerUserRequest());

    await axios.post('/register', payload)
    .then((res) =>{
        dispatch(registerUserSuccess(res.data));
    })
    .catch(err=>{
        dispatch(registerUserFailure(err));
    })
}