import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { Left, ListItem, Right, Text } from "native-base";
import PropTypes from "prop-types"
import React from "react";

const _ActionTypeComponent = (props) => {
    const { addAction, name, score } = props;
    return (
        <ListItem
            button
            onPress = {addAction}
        >
            <Left>
                <Text>
                    {name}
                </Text>
            </Left>
            <Right>
                <Text>
                    {score}
                </Text>
            </Right>
        </ListItem>
    );
}

_ActionTypeComponent.propTypes = {
    name: PropTypes.string,
    score: PropTypes.array
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    addAction: (actionTypeId) => dispatch(addAction(actionTypeId))
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        addAction: ({ _id, addAction }) => () => {
            addAction({ actionTypeId: _id });
        }
    })
)

export default enhance(_ActionTypeComponent);
