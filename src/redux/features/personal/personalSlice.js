import { createSlice } from '@reduxjs/toolkit'
import { getProfiles } from '../../actions/personalActions'

const initialState = {
  profiles: [],
  isLoading: false,
  error: false,
  errorResponse: null
}

export const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {},
  extraReducers: {
    //Get Profiles
    [getProfiles.pending]: (state) => {
      state.profiles = []
      state.isLoading = true
      state.error = false
    },
    [getProfiles.fulfilled]: (state,{ payload }) => {
      state.isLoading = false
      state.profiles = payload
    },
    [getProfiles.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.errorResponse = payload
    },
  }
})

export const selectProfiles = (state) => state.personal.profiles

export default personalSlice.reducer