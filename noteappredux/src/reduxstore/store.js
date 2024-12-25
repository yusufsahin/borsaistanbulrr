import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import { thunk } from "redux-thunk";

const rootReducer= combineReducers(
    {
        count:counterReducer
    }
);

const store= createStore(rootReducer,applyMiddleware(thunk));

export default store;