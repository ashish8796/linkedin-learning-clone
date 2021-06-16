import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SUBSCRIBE_USER,
} from "./actionTypes";
import { loginUsers, putSubscribeUser, registerUsers } from "../../api/api";
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

export const registerUser = (payload: IRegister) => async (dispatch: any) => {
  dispatch(registerUserRequest());

  console.log(payload);
  await registerUsers(payload)
    .then((res: any) => {
      console.log(res.data);

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
