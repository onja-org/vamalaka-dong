import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { sendQuery, getCategoriesQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchCategoriesError = {
  message: string
}

export const fetchCategories = createAsyncThunk<
  any[],
  string[],
  { rejectValue: FetchCategoriesError }
>(
  'categories/fetch',

  async (_, thunkApi) => {
    const response = await sendQuery(getCategoriesQuery())

    const categories = response?.data?.data?.categories

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch todos.',
      })
    }

    return categories
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [] as any[],
    status: '',
    error: null as FetchCategoriesError | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
      state.status = 'idle'
    })

    builder.addCase(fetchCategories.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

export const selectCategories = (state: RootState) =>
  state.categories.categories
export const categoriesSelector = createSelector<RootState, any[], any[]>(
  selectCategories,
  (categories) => categories
)

export default categoriesSlice.reducer
