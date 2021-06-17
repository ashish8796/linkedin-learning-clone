import { getWholeData } from "../../api/api";
import { SEARCH_DATA_FAILURE, SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS } from "./actionType"

const getAllDataRequest = () => {
    return {
        type: SEARCH_DATA_REQUEST
    };
};

const getAllDataSuccess = (payload: any) => {
    return {
        type: SEARCH_DATA_SUCCESS,
        payload
    };
};

const getAllDataFailure = (err: any) => {
    return {
        type: SEARCH_DATA_FAILURE,
        payload: err
    };
};

export const getAllData = (payload: string) => (dispatch: any) => {
    dispatch(getAllDataRequest());
    
    getWholeData(payload)
    .then((res: any)=>{
        console.log(res.data)
        dispatch(getAllDataSuccess(res.data));
    })
    .catch((err: any) => {
        dispatch(getAllDataFailure(err));
    })
};