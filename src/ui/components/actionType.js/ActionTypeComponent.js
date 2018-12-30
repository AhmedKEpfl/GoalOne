import { Left, ListItem, Right, Text } from "native-base";
import PropTypes from "prop-types"
import React from "react";

const _ActionTypeComponent = (props) => {
    const { name, score } = props
    return (
        <ListItem>
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
    score: PropTypes.number
};

export default _ActionTypeComponent;
