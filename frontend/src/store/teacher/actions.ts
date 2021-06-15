import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { getTeacher } from "../../api/api"
import { SET_TEACHER } from "./actionTypes"

export const setTeacher = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getTeacher(id);

    console.log(data.teacher)

    dispatch({
      type: SET_TEACHER,
      payload: data.teacher
    })

  } catch (error) {

  }

}