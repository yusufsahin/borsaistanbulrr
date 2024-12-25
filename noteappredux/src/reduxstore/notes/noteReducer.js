import {
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_REJECTED,
} from "./actionTypes";

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_NOTES_FULFILLED:
      return { ...state, loading: false, notes: action.payload };
    case FETCH_NOTES_REJECTED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default noteReducer;
