import { DrawerActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
};

function toggleDrawer() {
    _navigator.dispatch(
        DrawerActions.toggleDrawer()
    )
};

export default {
    setTopLevelNavigator,
    toggleDrawer
};
