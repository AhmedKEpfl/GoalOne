import ActionTypeComponent from "./ActionTypeComponent.js";
import { compose } from "recompose";
import { connect } from "react-redux";
import React from "react";

const _ActionTypesView = (props) => {
    const { actionTypes } = props;
    return actionTypes.map((actionType, index) => (
        <ActionTypeComponent
            key = {index}
            _id = {index}
            {...actionType}
        />
    ))
}

const mapStateToProps = (state) => ({
    actionTypes: state.actionTypes
})

const enhance = compose(
    connect(mapStateToProps)
)

export default enhance(_ActionTypesView);
