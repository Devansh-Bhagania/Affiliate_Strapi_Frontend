"use client" // Important for Next.js app router + Redux usage

import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './articleSlice'
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  articles: articlesReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disable serializable check for redux-persist
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
// Optional: Setup TypeScript types for dispatch and state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
