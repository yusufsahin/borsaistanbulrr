import axiosInstance from "../../lib/axiosInstance";
import {
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_REJECTED,
} from "./actionTypes";


//Action Creators

export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: FETCH_NOTES_PENDING });
  try {
    const response = await axiosInstance.get("/notes");
    dispatch({ type: FETCH_NOTES_FULFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_NOTES_REJECTED, payload: error.message });
  }
};
