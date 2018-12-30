import React from "react";
import DrawerNavigationService from "GoalOneApp/src/navigation/DrawerNavigationService.js";
import { DrawerNavigator } from "GoalOneApp/src/navigation";
import { MenuButton } from "GoalOneApp/src/ui/components/base";

class _MainScreen extends React.Component{
    static navigationOptions = {
        headerLeft: (
            <MenuButton onPress = {DrawerNavigationService.toggleDrawer} />
        ),
        headerStyle: {
            backgroundColor: 'transparent',
            zIndex: 100
        }
    };

    render() {
        return (
            <DrawerNavigator
                ref = {navigatorRef => {
                    DrawerNavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
};

export default _MainScreen;
