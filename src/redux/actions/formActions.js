import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

import customAxios from "../axios";

export const getForm = createAsyncThunk(
  "form/info",
  async ({ id_user, codeForm }, {rejectWithValue}) => {
    try {
      const response = await customAxios.get(
        `/form/` + codeForm +`/full_form`,
        {
          params: {
            id_user: id_user
          }
        }
      );
      return response.data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Error 401',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const submitForm = createAsyncThunk(
  "form/submit",
  async ({ body }, {rejectWithValue}) => {
    try {
      const response = await customAxios.post(
        `/form/submit_form`,
         body 
      );
      return response.data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Error 401 ',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const sendForm = createAsyncThunk(
  "form/send",
  async ({ body }, {rejectWithValue}) => {
    try {
      const response = await customAxios.post(
        `/form/send_responses`,
         body 
      );
      return response.data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Error 401 ',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)