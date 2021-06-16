import { loadData, saveData } from "../utils/localStorage";
import { GET_USER_BY_EMAIL_FAILURE, GET_USER_BY_EMAIL_REQUEST, GET_USER_BY_EMAIL_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

export interface IState {
    isLoading: boolean;
    isError: boolean;
    isAuth: boolean;
    data: any;
    token: string;
    userDetails: any;
    userId: string;
}

const isAuth: boolean = loadData("isAuth") || false;
const userDetails: any = loadData("userDetails") || {}

const initState: IState = {
    isLoading: false,
    isError: false,
    isAuth: isAuth,
    data: {},
    userId: "60c45968eb2a7920e493e238",
    token: '',
    userDetails: userDetails
}

export const userReducer = (state=initState, action: any) =>{
    const payload = action.payload;
    switch(action?.type){
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false
            }
        }
        case REGISTER_USER_SUCCESS: {
            saveData("isAuth", true);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                data: payload
            }
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false
            }
        }
        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false
            }
        }
        case LOGIN_USER_SUCCESS: {
            saveData("isAuth", true);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload
            }
        }
        case LOGIN_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false
            }
        }
        case GET_USER_BY_EMAIL_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_USER_BY_EMAIL_SUCCESS: {
            saveData("userDetails", payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
                userDetails: payload
            }
        }
        case GET_USER_BY_EMAIL_FAILURE: {
            return {
                isLoading: false,
                isError: true
            }
        }
        case LOGOUT_USER: {
            saveData("isAuth", false);
            saveData("userDetails", {});
            return {
                ...state,
                isAuth: false
            }
        }
        default: 
            return state;
    }
}