import { configureStore } from '@reduxjs/toolkit'
import adsReducer from './slices/adsSlice'
import categoriesReducer from './slices/categoriesSlice'

export const store = configureStore({
  reducer: {
    ads: adsReducer,
    categories: categoriesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
