import axios from "axios";
import { GET_ERRORS } from "./types";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}       // this is clearing errors (if everything is ok)
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data  // this is displaying errors
    });
  }
};