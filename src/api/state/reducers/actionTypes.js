import { defaultActions } from "GoalOneApp/src/api/defaultActions.js";

const actionTypes = (state = defaultActions, action) => {
    switch(action.type) {
        case "ADD_ACTION_TYPE":
            const newActionType = action.actionType;
            return [ ...state, newActionType ];
        case "DELETE_ACTION_TYPE":
            const index = action.actionTypeIndex;
            return setImmutable(state, index, { archived: true });
        default:
            return state;
    }
};

export default actionTypes;
