
import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";
import {backendLink} from "../../backendLink"

export const login = (creds) => async (dispatch) => { 
  dispatch({ type: LOGIN_LOADING });
  try {
    await axios.post(`${backendLink}/users/login`, creds)
    .then((res)=>{
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(backendLink);
    })
  } catch (e) {
    console.log(e.message)
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert(`Login failed: ${e.message}`);
  }
};

export const logout = () => ({ type: LOGOUT });