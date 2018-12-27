const screenHeight = (state=null, action) => {
    switch(action.type){
        case "SET_SCREEN_HEIGHT":
            return action.screenHeight;
        default:
            return state;
    }
}

export default screenHeight;
