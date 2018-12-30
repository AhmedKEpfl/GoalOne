import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { ActionTypesScreen, HomeScreen, SummaryScreen } from "GoalOneApp/src/ui/screens";
import React from "react";

const DrawerNavigator = createAppContainer(createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    ActionTypes: {
        screen: ActionTypesScreen
    },
    Summary: {
        screen: SummaryScreen
    }
}));

export default DrawerNavigator;
