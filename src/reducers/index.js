import { combineReducers } from "redux";
import authReducer from "./auth";
import circularReducer from "./circular";
import currentUserReducer from "./currentUser";
import deptReducer from "./dept";
export default combineReducers({
    authReducer,
    circularReducer,
    currentUserReducer,
    deptReducer
})