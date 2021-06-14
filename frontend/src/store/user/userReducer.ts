import { loadData, saveData } from "../utils/localStorage";
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

export interface IState {
    isLoading: boolean,
    isError: boolean,
    isAuth: boolean,
    data: any,
    token: string
}

const isAuth: boolean = loadData("isAuth") || false;

const initState: IState = {
    isLoading: false,
    isError: false,
    isAuth: isAuth,
    data: {},
    token: ''
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
        default: 
            return state;
    }
}