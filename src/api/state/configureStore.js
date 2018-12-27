import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./reducers";

const rootReducer = (state, action) => {
    if(action.type === "USER_LOGOUT") {
        Object.keys(state).forEach(key => {
            storage.removeItem(`persist:${key}`);
        });
        state = undefined;
    }
    return appReducer(state, action);
}

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
};
