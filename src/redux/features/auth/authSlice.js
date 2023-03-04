import { createSlice } from '@reduxjs/toolkit'
import { login } from '../../actions/authActions'

const initialState = {
  user: null,
  profile: null,
  token: null,
  isLoading: false,
  isLoadingProfile: true,
  error: false,
  errorResponse: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state,action) => {
      state.user = null
      state.token = null
    }
  },
  extraReducers: {
    //Login
    [login.pending]: (state) => {
      state.isLoading = true
      state.error = false
    },
    [login.fulfilled]: (state,{ payload }) => {
      state.isLoading = false
      state.user = payload
      state.token = 'dljfnasldfnj'
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.errorResponse = payload
    },
  }
})

export const { logoutUser } = authSlice.actions

export default authSlice.reducer