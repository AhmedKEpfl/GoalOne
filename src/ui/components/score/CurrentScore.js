import React from "react";
import { Text } from "native-base";

const CurrentScore = (props) => {
    return (
        <Text>

        </Text>
    );
}

const mapDispatchToProps = (state) => ({
    actions: state.actions,
    actionTypes: state.actionTypes
});

export default CurrentScore;
