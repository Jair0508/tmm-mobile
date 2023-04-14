import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from '../../actions/authActions'

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
      state.token = 'as123#"$%#$asdasd'
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.errorResponse = payload
    },

    //LogOut
    [logout.pending]: (state) => {
      state.isLoading = true
      state.error = false
    },
    [logout.fulfilled]: (state,{ payload }) => {
      state.isLoading = false
      //state.user = null
      //state.token = null
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.errorResponse = payload
    },
  }
})

export const { logoutUser } = authSlice.actions

export const selectUser = (state) => state.auth.user

export default authSlice.reducer