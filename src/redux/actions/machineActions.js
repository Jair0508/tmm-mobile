import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

import customAxios from "../axios";

export const getMachines = createAsyncThunk(
  "machine/all",
  async ({}, {rejectWithValue}) => {
    try {
      const response = await customAxios.get(
        `/api/machine/`
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

export const getSections = createAsyncThunk(
  "machine/sections",
  async ({ id_machine }, {rejectWithValue}) => {
    try {
      const params = {
        id_machime: id_machine
      }
      const response = await customAxios.get(
        `/api/machine/section-api`,
        {params: params}
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