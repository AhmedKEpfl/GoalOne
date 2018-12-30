import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { HomeScreen, SummaryScreen } from "GoalOneApp/src/ui/screens";
import React from "react";

const DrawerNavigator = createAppContainer(createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Summary: {
        screen: SummaryScreen
    }
}));

export default DrawerNavigator;
