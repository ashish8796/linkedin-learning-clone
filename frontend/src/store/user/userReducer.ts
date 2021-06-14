import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

export interface UserState {
    isLoading: boolean,
    isError: boolean,
    data: any
    userId: string
}

const initState: UserState = {
    isLoading: false,
    isError: false,
    data: {}
    ,
    userId: "60c45968eb2a7920e493e238"
}

export const userReducer = (state = initState, action: any) => {
    const payload = action.payload;
    switch (action?.type) {
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}