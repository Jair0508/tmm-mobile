import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {},
  extraReducers: {}
})


export default authSlice.reducer