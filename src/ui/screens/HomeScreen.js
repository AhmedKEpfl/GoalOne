import React from "react";
import { Container, Content } from "native-base";
import { CurrentScore } from "GoalOneApp/src/ui/components/score";

const HomeScreen = (props) => {
    return (
        <Container>
            <Content>
                <CurrentScore />
            </Content>
        </Container>
    )
};

export default HomeScreen;
