import { combineReducers } from "redux";
import authReducer from "./auth";
import circularReducer from "./circular";
import currentUserReducer from "./currentUser";
import deptReducer from "./dept";
import toggleReducer from "./toggle";
import loadingReducer from "./loading";
import alertReducer from "./alert";
export default combineReducers({
    authReducer,
    circularReducer,
    currentUserReducer,
    deptReducer,
    toggleReducer,
    loadingReducer,
    alertReducer
})