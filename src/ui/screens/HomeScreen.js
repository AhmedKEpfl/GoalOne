import { ActionTypesView } from "GoalOneApp/src/ui/components/actionType.js";
import { Container, Content } from "native-base";
import { CurrentScore } from "GoalOneApp/src/ui/components/score";
import React from "react";

const HomeScreen = (props) => {
    return (
        <Container>
            <Content>
                <CurrentScore />
                <ActionTypesView />
            </Content>
        </Container>
    )
};

export default HomeScreen;
