import { createAppContainer, createStackNavigator } from "react-navigation";
import { SetActionTypeScreen, MainScreen } from "GoalOneApp/src/ui/screens";
import React from "react";

const StackNavigator = createAppContainer(createStackNavigator({
    Main: {
        screen: MainScreen
    },
    SetActionType: {
        screen: SetActionTypeScreen
    }
}))

export default StackNavigator;
