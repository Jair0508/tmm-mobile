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
  async ({ idMachine }, {rejectWithValue}) => {
    try {
      const params = {
        id_machime: idMachine
      }
      const response = await customAxios.get(
        `/api/machine/section-api`,
        { params: params }
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

export const getSubSections = createAsyncThunk(
  "machine/subsections",
  async ({ idSection }, {rejectWithValue}) => {
    try {
      const params = {
        id_section: idSection
      }
      const response = await customAxios.get(
        `/api/machine/subsection-api`,
        { params: params }
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

export const getInfo = createAsyncThunk(
  "machine/info",
  async ({ type, idModel }, {rejectWithValue}) => {
    try {
      const params = {
        type: type,
        id_model: idModel
      }
      const response = await customAxios.get(
        `/api/machine/info-api`,
        { params: params }
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