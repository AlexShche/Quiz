import {combineReducers} from "redux";
import {getUserReducer} from "./getUser.reducer";

export const rootReducer = combineReducers({
    currentUser: getUserReducer
})