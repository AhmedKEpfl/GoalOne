import { ActionTypesView } from "GoalOneApp/src/ui/components/actionType.js";
import ActionButton from "react-native-action-button";
import { compose, withHandlers } from "recompose";
import React from "react";
import StackNavigationService from "GoalOneApp/src/navigation/StackNavigationService.js";

const _ActionTypesScreen = (props) => {
    const { onPressAddAction } = props;
    return [
        <ActionTypesView key = "actionTypesView" />,
        <ActionButton
            key = "actionButton"
            onPress = {onPressAddAction}
        />
    ];
};


const enhance = compose(
    withHandlers({
        onPressAddAction: () => () => {
            StackNavigationService.navigate("SetActionType");
        }
    })
)
export default enhance(_ActionTypesScreen);
