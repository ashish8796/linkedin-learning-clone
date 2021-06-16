import { GET_USER_BY_EMAIL_FAILURE, GET_USER_BY_EMAIL_REQUEST, GET_USER_BY_EMAIL_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";
import { getUserDetailsByEmail, loginUsers, registerUsers } from "../../api/api";
import { ILogin } from '../../Components/SignIn/SignIn';
import { IRegister } from '../../Components/Register/Register';

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

const loginUserRequest = ()=>{
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (payload: any)=>{
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
}

const loginUserFailure = (err: any)=>{
    return {
        type: LOGIN_USER_FAILURE,
        payload: err
    }
}

const getUserByEmailRequest = ()=>{
    return {
        type: GET_USER_BY_EMAIL_REQUEST
    }
}

const getUserByEmailSuccess = (payload: any)=>{
    return {
        type: GET_USER_BY_EMAIL_SUCCESS,
        payload
    }
}

const getUserByEmailFailure = (err: any)=>{
    return {
        type: GET_USER_BY_EMAIL_FAILURE,
        payload: err
    }
}

export const logoutUser = ()=>{
    return {
        type: LOGOUT_USER
    }
}

export const registerUser = (payload: IRegister)=> async (dispatch: any)=>{
    dispatch(registerUserRequest());

    await registerUsers(payload)
    .then((res: any) =>{
        console.log(res.data)
        dispatch(registerUserSuccess(res.data));
    })
    .catch((err: any)=>{
        dispatch(registerUserFailure(err));
    })
}

export const loginUser = (payload: ILogin) => async (dispatch: any) => {
    dispatch(loginUserRequest());

    await loginUsers(payload)
    .then((res: any)=>{
        dispatch(loginUserSuccess(res.data));
    })
    .catch((err: any)=>{
        dispatch(loginUserFailure(err));
    })
}

export const getUserByEmail = (payload: ILogin) => async (dispatch: any) => {
    dispatch(getUserByEmailRequest());

    await getUserDetailsByEmail(payload.emailId)
    .then((res: any)=>{
        dispatch(getUserByEmailSuccess(res.data.user));
    })
    .catch((err: any)=>{
        dispatch(getUserByEmailFailure(err));
    })
}