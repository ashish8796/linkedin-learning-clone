import { SEARCH_DATA_FAILURE, SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS } from "./actionType";

interface IState {
    searchData: any;
    isLoading: boolean;
    isError: boolean;
    error: string
}

const initState: IState = {
    searchData: {},
    isLoading: false,
    isError: false,
    error: ""
}

export const appReducer = (state = initState, action: any) =>{
    const payload = action.payload;
    switch (action?.type) {
        case SEARCH_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case SEARCH_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                searchData: payload
            }
        }
        case SEARCH_DATA_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        }
        default: 
            return state;
    }
}