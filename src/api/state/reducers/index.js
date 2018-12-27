import { combineReducers } from "redux";
import actions from "./actions.js";
import screenHeight from "./screenHeight.js";

export default combineReducers({
    actions,
    screenHeight
});
