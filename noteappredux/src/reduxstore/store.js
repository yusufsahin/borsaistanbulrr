import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import { thunk } from "redux-thunk";
import noteReducer from "./notes/noteReducer";

const rootReducer= combineReducers(
    {
        counterReducer,
        notes:noteReducer,
       
    }
);

const store= createStore(rootReducer,applyMiddleware(thunk));

export default store;