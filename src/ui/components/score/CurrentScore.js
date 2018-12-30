import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import { getTotalScore } from "GoalOneApp/src/helpers/getScore.js";
import React from "react";
import { Text } from "native-base";
import { View } from "react-native";

const CurrentScore = (props) => {
    const { totalScore } = props;

    return (
        <View>
            <Text
                style = {{
                    fontSize: 30
                }}
            >
                {totalScore}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => ({
    actions: state.actions,
    actionTypes: state.actionTypes
});

const enhance = compose(
    connect(mapStateToProps),
    withProps(({ actions, actionTypes }) => ({
        totalScore: getTotalScore({ actions, actionTypes})
    }))
);

export default enhance(CurrentScore);
