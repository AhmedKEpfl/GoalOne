import React from "react";
import {View} from "react-native";

import {
    connect,
} from "react-redux";

import {setScreenHeight} from "GoalOneApp/src/api/state/actions"

/**
Unfortunately the require("Dimensions") method doesn't always give the exact
height of the screen (at least on some Android devices) so I want to use this
component which will measure the height and store it in the redux state
*/

const _HeightAdapter = (props) => {
    const {screenHeight, setScreenHeight, children} = props;
    return (
        screenHeight ?
        children
        :
        <View
            style = {{
                flex: 1,
            }}
            onLayout = {(event) => {
                const {height} = event.nativeEvent.layout;
                setScreenHeight(height);
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    screenHeight: state.screenHeight,
});

const mapDispatchToProps = dispatch => ({
    setScreenHeight: (screenHeight) => dispatch(setScreenHeight(screenHeight))
})

export default connect(mapStateToProps, mapDispatchToProps)(_HeightAdapter);
