import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SUBSCRIBE_USER,
  GET_USER_BY_EMAIL_REQUEST,
  GET_USER_BY_EMAIL_SUCCESS,
  GET_USER_BY_EMAIL_FAILURE,
  LOGOUT_USER,
} from "./actionTypes";

import { 
  loadData, 
  saveData 
} from "../utils/localStorage";

export interface UserState {
  isLoading: boolean;
  isError: boolean;
  userId: string;
  isAuth: boolean;
  data: any;
  token: string;
  userDetails: any;
}

const isAuth: boolean = loadData("isAuth") || false;
const userDetails: any = loadData("userDetails") || {};

const initState: UserState = {
  isLoading: false,
  isError: false,
  userId: "60c45968eb2a7920e493e238",
  isAuth: isAuth,
  data: {},
  token: "",
  userDetails: userDetails
};

export const userReducer = (state = initState, action: any) => {
    const payload = action.payload;
    switch (action?.type) {
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            };
        }
        case REGISTER_USER_SUCCESS: {
            saveData("isAuth", true);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                data: payload,
            };
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            };
        }
        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            };
        }
        case LOGIN_USER_SUCCESS: {
            saveData("isAuth", true);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload,
            };
        }
        case LOGIN_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            };
        }
        case SUBSCRIBE_USER: {
            console.log(payload);
            return {
                ...state,
                userId: payload.data.result._id,
                isAuth: true,
                data: payload.data.result,
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
};
