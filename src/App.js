import HeightAdapter from "./ui/layout/HeightAdapter.js";
import Navigation from "./navigation/Navigation.js";
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
                <Navigation />
            </HeightAdapter>
        </PersistGate>
    </Provider>
);

export default App;
