import HeightAdapter from "./ui/layout/HeightAdapter.js";
import StackNavigationService from "./navigation/StackNavigationService.js";
import { StackNavigator } from "./navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import getReduxStore from "./api/state/configureStore.js";
const { store, persistor } = getReduxStore();

import React from "react";
import { Text, View } from "react-native";

const App = (props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HeightAdapter>
                <StackNavigator
                    ref = {navigatorRef => {
                        StackNavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </HeightAdapter>
        </PersistGate>
    </Provider>
);

export default App;
