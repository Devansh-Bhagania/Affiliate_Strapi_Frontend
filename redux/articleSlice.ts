"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
    const data = await res.json()
    return data.data // We'll store data.data directly in Redux
  }
)

interface ArticleState {
  data: any[]
  loading: boolean
  error: string | null  
}

const initialState: ArticleState = {
  data: [],
  loading: false,
  error: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addCase(state, action) {
      state.data = action.payload
    }
  }
})


// Export the reducer
export const { addCase } = articlesSlice.actions


export default articlesSlice.reducer
