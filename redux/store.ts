"use client" // Important for Next.js app router + Redux usage

import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './articleSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
})

// Optional: Setup TypeScript types for dispatch and state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
