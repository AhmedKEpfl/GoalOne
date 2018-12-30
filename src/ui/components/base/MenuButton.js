import { Button, Icon } from "native-base";
import React from "react";

const _MenuButton = (props) => {
    const { onPress } = props;
    return (
        <Button
            onPress = {onPress}
            transparent
        >
            <Icon name = "menu" />
        </Button>
    )
};

export default _MenuButton;
