import { addActionType } from "GoalOneApp/src/api/state/actions";
import { compose, withHandlers, withState } from "recompose";
import { connect } from "react-redux";
import { Form } from "GoalOneApp/src/ui/components/base";
import React from "react";
import { Text } from "native-base";

const _SetActionTypeScreen = (props) => {
    const { addActionType, values, setValues } = props;
    return (
        <Form
            fields = {{
                name: {
                    type: "text"
                },
                score: {
                    type: "text",
                    keyboardType: "numeric"
                }
            }}
            values = {values}
            onChange = {setValues}
            onSubmit = {addActionType}
        />
    )
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    addActionType: (actionType) => dispatch(addActionType({ actionType }))
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState("values", "setValues", {}),
    withHandlers({
        addActionType: ({ addActionType, values }) => () => {
            addActionType(values);
        }
    })
);

export default enhance(_SetActionTypeScreen);
