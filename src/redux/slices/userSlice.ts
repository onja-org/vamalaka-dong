import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { registerMutation, sendQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchUserError = {
  message: string
}

interface UserData {
  username: string
  token: string
}

interface UserRegisterData {
  username: string
  password: string
  email: string
  role: string
  token: string
}

interface PayloadUserRegister {
  username: string
  password: string
  email: string
  role: string
}

interface PayloadRegister {
  register: UserData
}

export const fetchRegisterUser = createAsyncThunk<
  PayloadRegister,
  PayloadUserRegister,
  {
    dispatch: any
    state: RootState
    rejectValue: FetchUserError
  }
>('register/fetch', async (userRegistrationFormData, thunkApi) => {
  const { username, password, email, role } = userRegistrationFormData
  const response = await sendQuery(
    registerMutation(username, password, email, role)
  )

  const user = response?.data?.data
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0]?.message,
    })
  }

  return user
})

const initialState = {
  user: { username: '', token: '' } as UserData,
  status: '',
  error: null as FetchUserError | null,
}

export const adsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })

    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = 'idle'
    })

    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

const selectUser = (state: RootState) => state.user.user
const selectUserError = (state: RootState) => state.user.error
const selectUserStatus = (state: RootState) => state.user.status
export const userSelector = createSelector<RootState, UserData, UserData>(
  selectUser,
  (user) => user
)

export const userErrorSelector = createSelector<RootState, any, any>(
  selectUserError,
  (error) => error
)

export const userStatusSelector = createSelector<RootState, string, string>(
  selectUserStatus,
  (status) => status
)

export default adsSlice.reducer
