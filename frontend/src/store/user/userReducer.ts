import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SUBSCRIBE_USER,
} from "./actionTypes";

export interface UserState {
  isLoading: boolean;
  isError: boolean;
  userId: string;
  isAuth: boolean;
  data: any;
  token: string;
}

const initState: UserState = {
  isLoading: false,
  isError: false,
  userId: "60c45968eb2a7920e493e238",
  isAuth: false,
  data: {},
  token: "",
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
      };
    }
    default:
      return state;
  }
};
