import { createAppContainer, createStackNavigator } from "react-navigation";
import { MainScreen } from "GoalOneApp/src/ui/screens";
import React from "react";

const StackNavigator = createAppContainer(createStackNavigator({
    Main: {
        screen: MainScreen
    }
}))

export default StackNavigator;
