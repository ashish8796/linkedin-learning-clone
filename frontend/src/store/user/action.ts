import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";
import { loginUsers, registerUsers } from "../../api/api";
import { ILogin } from '../../Components/SignIn/SignIn';
import { IRegister } from '../../Components/Register/Register';

const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = (payload: any) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

const registerUserFailure = (err: any) => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: err
    }
}

const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (payload: any) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
}

const loginUserFailure = (err: any) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: err
    }
}

export const registerUser = (payload: IRegister) => async (dispatch: any) => {
    dispatch(registerUserRequest());

    await registerUsers(payload)
        .then((res: any) => {
            console.log(res.data)
            dispatch(registerUserSuccess(res.data));
        })
        .catch((err: any) => {
            dispatch(registerUserFailure(err));
        })
}

export const loginUser = (payload: ILogin) => async (dispatch: any) => {
    dispatch(loginUserRequest());

    await loginUsers(payload)
        .then((res: any) => {
            console.log(res.data)
            dispatch(loginUserSuccess(res.data));
        })
        .catch((err: any) => {
            dispatch(loginUserFailure(err));
        })
}