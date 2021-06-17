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
  GET_INDIVIDUAL_USER_REQUEST,
  GET_INDIVIDUAL_USER_SUCCESS,
  GET_INDIVIDUAL_USER_FAILURE,
} from "./actionTypes";
import { loginUsers, putSubscribeUser, registerUsers, getUserDetailsByEmail, getIndividualUserAPI } from "../../api/api";
import { ILogin } from "../../Components/SignIn/SignIn";
import { IRegister } from "../../Components/Register/Register";
import { Dispatch } from "redux";
import axios from "axios";
import { setData } from "../temp/state";

const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST
  }
}

export const subscribeUser =
  (userId: string, payload: any) => async (dispatch: Dispatch) => {
    try {
      let data: any = await putSubscribeUser(userId, payload);
      console.log(data);
      dispatch({ type: SUBSCRIBE_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

const registerUserSuccess = (payload: any) => {
  setData("data", { userId: payload.user._id });
  console.log(payload.user._id);
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  };
};

const registerUserFailure = (err: any) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: err,
  };
};

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

const loginUserSuccess = (payload: any) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  };
};

const loginUserFailure = (err: any) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: err,
  };
};
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

export const getIndividualUserRequest = ()=>{
    return {
          type: GET_INDIVIDUAL_USER_REQUEST
    }
}

export const getIndividualUserSuccess = (payload: any)=>{
    return {
          type: GET_INDIVIDUAL_USER_SUCCESS,
          payload
    }
}

export const getIndividualUserFailure = (err: any)=>{
    return {
          type: GET_INDIVIDUAL_USER_FAILURE,
          payload: err
    }
}

export const registerUser = (payload: IRegister) => async (dispatch: any) => {
  dispatch(registerUserRequest());

  console.log(payload);
  await registerUsers(payload)
    .then((res: any) => {
      dispatch(registerUserSuccess(res.data));
    })
    .catch((err: any) => {
      dispatch(registerUserFailure(err));
    });
};

export const loginUser = (payload: ILogin) => async (dispatch: any) => {
  dispatch(loginUserRequest());

  await loginUsers(payload)
    .then((res: any) => {
        dispatch(loginUserSuccess(res.data));
    })
    .catch((err: any) => {
        dispatch(loginUserFailure(err));
    });
};

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

export const getIndividualUser = (id: string) => async (dispatch: any) => {
    dispatch(getIndividualUserRequest());

    await getIndividualUserAPI(id)
    .then((res: any) => {
        return dispatch(getIndividualUserSuccess(res.data));
    })
    .catch((err: any) => {
        return dispatch(getIndividualUserFailure(err));
    })
}