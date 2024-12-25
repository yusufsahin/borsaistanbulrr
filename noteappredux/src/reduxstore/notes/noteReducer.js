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
    case CREATE_NOTE_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_NOTE_FULFILLED:
        return {
            ...state,
            loading: false,
            notes:[...state.notes,action.payload]};

    case CREATE_NOTE_REJECTED:
        return{...state,loading:false,error:action.payload};


    case UPDATE_NOTE_PENDING:
        return {...state,loading:true,error:null};
    case UPDATE_NOTE_FULFILLED:
        return {...state,loading:false,
            notes:state.notes.map(
                (note)=>note.id===action.payload.id ?{...note,...action.payload} :note
            ),

        };
    case UPDATE_NOTE_REJECTED:
        return { ...state,loading:false,error:action.payload};
    case DELETE_NOTE_PENDING:
        return {...state,loading:true,error:null};
    case DELETE_NOTE_FULFILLED:
        return {...state,loading:false,
            notes:state.notes.filter((note)=>note.id!==action.payload)
        };
    case DELETE_NOTE_REJECTED:
        return {...state,loading:false,error:action.payload}
    default:
      return state;
  }
};

export default noteReducer;
