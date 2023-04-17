import { createSlice } from '@reduxjs/toolkit'
import { getForm, sendForm, submitForm } from '../../actions/formActions'
import { ToastAndroid } from 'react-native'

const initialState = {
  detailForm: {
    questions: [],
    validate_response: { status: false }
  },
  responses_code: null,
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
      state.detailForm = initialState.detailForm
    },
    [getForm.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.detailForm = payload
    },
    [getForm.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.detailForm = initialState.detailForm
      state.error = true
      state.errorResponse = payload
    },
    //Submit Form
    [submitForm.pending]: (state) => {
      state.isLoading = true;
    },
    [submitForm.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      ToastAndroid.show(
        'Gracias por las respuestas',
        ToastAndroid.LONG
      )
      state.responses_code = payload.responses_code
    },
    [submitForm.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = true;
      state.errorResponse = payload;
    } ,
    //Send Form
    [sendForm.pending]: (state) => {
      state.isLoading = true;
    },
    [sendForm.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      ToastAndroid.show(
        'Se envio el reporte completo',
        ToastAndroid.LONG
      )
    },
    [sendForm.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = true;
      state.errorResponse = payload;
    } 
  }
})

export const selectResponses = (state) => state.form.responses_code

export const selectForm = (state) => state.form.detailForm

export default formSlice.reducer