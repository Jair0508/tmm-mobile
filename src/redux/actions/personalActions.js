import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

import customAxios from "../axios";

export const getProfiles = createAsyncThunk(
  "personal/all",
  async ({}, {rejectWithValue}) => {
    try {
      console.log("enter")
      const response = await customAxios.get(
        `/api/get_profiles`
      );
      console.log("proiles", response.data)
      return response.data
    } catch (error) {
      console.log("error", error)
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