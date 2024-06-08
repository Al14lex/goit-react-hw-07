import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";


const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ['items'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactReducer),
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
