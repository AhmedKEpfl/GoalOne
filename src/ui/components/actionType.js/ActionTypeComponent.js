import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { Left, ListItem, Right, Text } from "native-base";
import PropTypes from "prop-types"
import React from "react";
import _ from "lodash";

const _ActionTypeComponent = (props) => {
    const { addAction, name, scores } = props;
    const lastScore = _.last(scores).score;
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
                    {lastScore}
                </Text>
            </Right>
        </ListItem>
    );
}

_ActionTypeComponent.propTypes = {
    name: PropTypes.string,
    scores: PropTypes.array
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
