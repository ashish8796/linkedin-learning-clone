import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

interface state {
    isLoading: boolean,
    isError: boolean,
    data: any
}

const initState: state = {
    isLoading: false,
    isError: false,
    data: {}
}

export const userReducer = (state=initState, action: any) =>{
    const payload = action.payload;
    switch(action?.type){
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