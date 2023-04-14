import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import customAxios from "../axios";
const querystring = require('querystring');

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + 'new_oktne'
        }
      }
      const response = await customAxios.post(
        `/api/auth-login/`,
        { username,email,password },
        config
      );
      if (!response.data.status) {
        ToastAndroid.show(
          'Usuario o contraseña invalidos',
          ToastAndroid.LONG
        )
        return rejectWithValue('Error server');
      } else {
        return response.data
      }
      /*const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const response = await customAxios.post(
        `/api/v1/auth/login`,
        querystring.stringify(body),
        config
      );
      if (response.status === 200) {
        const data = response.data
        customAxios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
        
      }*/
      /*const response = {
        data: {
          username: 'prueba',
          email: 'prueba@gmail.com',
          password: 'nuevacontraseña'
        }
      }
      return response.data*/
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Usuario o contraseña invalidos',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.detail);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const logout = createAsyncThunk(
  "auth/logout",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await customAxios.post(
        `/api/new-logout/`,{}
      );
      return response.data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Usuario o contraseña invalidos',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.detail);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)