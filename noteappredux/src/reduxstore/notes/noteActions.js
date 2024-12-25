import axiosInstance from "../../lib/axiosInstance";
import {
    CREATE_NOTE_FULFILLED,
    CREATE_NOTE_PENDING,
  CREATE_NOTE_REJECTED,
  DELETE_NOTE_FULFILLED,
  DELETE_NOTE_PENDING,
  DELETE_NOTE_REJECTED,
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_REJECTED,
  UPDATE_NOTE_FULFILLED,
  UPDATE_NOTE_PENDING,
  UPDATE_NOTE_REJECTED,
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


export const createNote = (note) => async (dispatch) => {
    dispatch({ type: CREATE_NOTE_PENDING });
    try {
      const response = await axiosInstance.post("/notes",note);
      dispatch({ type: CREATE_NOTE_FULFILLED, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_NOTE_REJECTED, payload: error.message });
    }
  };
  


export const updateNote = (id,updateNote) => async (dispatch) => {
    dispatch({ type: UPDATE_NOTE_PENDING });
    try {
      const response = await axiosInstance.put(`/notes/${id}`,updateNote);
      dispatch({ type: UPDATE_NOTE_FULFILLED, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_NOTE_REJECTED, payload: error.message });
    }
  };


export const deleteNote = (id) => async (dispatch) => {
    dispatch({ type: DELETE_NOTE_PENDING });
    try {
      const response = await axiosInstance.delete(`/notes/${id}`);
      dispatch({ type: DELETE_NOTE_FULFILLED, payload: id});
    } catch (error) {
      dispatch({ type: DELETE_NOTE_REJECTED, payload: error.message });
    }
  };