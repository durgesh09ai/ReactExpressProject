import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';

import authReducer from './Slices/authSlice';
import profileReducer from './Slices/profileSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile'], // Only auth and profile will be persisted
};

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
