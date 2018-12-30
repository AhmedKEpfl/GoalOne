import { combineReducers } from "redux";
import actions from "./actions.js";
import actionTypes from "./actionTypes.js";
import screenHeight from "./screenHeight.js";

export default combineReducers({
    actions,
    actionTypes,
    screenHeight
});
