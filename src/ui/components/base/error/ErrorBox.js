import React from "react";

import { Text } from "native-base";

const ErrorBox = (props) => {
    const {errorText} = props;
    return (
        <Text style = {{
            color: "red",
        }}>
            {errorText}
        </Text>
    )
}

export default ErrorBox;
