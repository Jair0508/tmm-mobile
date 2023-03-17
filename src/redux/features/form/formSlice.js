import { createSlice } from '@reduxjs/toolkit'
import { getForm, submitForm } from '../../actions/formActions'

const initialState = {
  detailForm: {
    questions: []
  },
  isLoading: false,
  error: false,
  errorResponse: null
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: {
    //Get Form
    [getForm.pending] : (state) => {
      state.isLoading = true
      state.detailForm = {
        questions: []
      }
    },
    [getForm.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.detailForm = payload
    },
    [getForm.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.detailForm = {
        questions: []
      }
      state.error = true
      state.errorResponse = payload
    },
    //Submit Form
    [submitForm.pending]: (state) => {
      state.isLoading = true;
    },
    [submitForm.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [submitForm.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = true;
      state.errorResponse = payload;
    } 
  }
})

export const selectForm = (state) => state.form.detailForm

export default formSlice.reducer