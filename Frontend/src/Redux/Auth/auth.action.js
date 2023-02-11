
import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => { 
  dispatch({ type: LOGIN_LOADING });
  try {
    await axios.post("http://localhost:8080/users/login", creds)
    .then((res)=>{
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data);
    })
  } catch (e) {
    console.log(e.message)
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert(`Login failed: ${e.message}`);
  }
};

export const logout = () => ({ type: LOGOUT });