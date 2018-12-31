import { defaultActions, getDefaultScores } from "GoalOneApp/src/api/defaultActions.js";

const actionTypes = (state = defaultActions, action) => {
    switch(action.type) {
        case "ADD_ACTION_TYPE":
            const { actionType } = action;
            const newActionType = ("scores" in actionType) ?
                actionType
                :
                { ...actionType, scores: getDefaultScores(actionType.score) };
            return [ ...state, newActionType ];
        case "DELETE_ACTION_TYPE":
            const index = action.actionTypeIndex;
            return setImmutable(state, index, { archived: true });
        default:
            return state;
    }
};

export default actionTypes;
