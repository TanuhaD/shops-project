import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { shopsReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const shopsPersistConfig = {
  key: "shopsStore",
  storage,
};

const rootReducer = combineReducers({
  shopsStore: shopsReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(shopsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
