const actions = (state=[], action) => {
    switch(action.type) {
        case "ADD_ACTION":
            return [ ...state, action.action ];
        default:
            return state;
    }
};

export default actions;
