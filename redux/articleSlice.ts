"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch articles'
      })
  },
})

export default articlesSlice.reducer
