import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import customAxios from "../axios";
const querystring = require('querystring');

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const body = {
        email,
        password
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      /*const response = await customAxios.post(
        `/api/v1/auth/login`,
        querystring.stringify(body),
        config
      );
      if (response.status === 200) {
        const data = response.data
        customAxios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
        
      }*/
      const response = {
        data: {
          username: 'prueba',
          email: 'prueba@gmail.com',
          password: 'nuevacontraseña'
        }
      }
      return response.data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.detail) {
        if (error.response.status == 401) {
          ToastAndroid.show(
            'Usuario o contraseña invalidos',
            ToastAndroid.LONG
          )
        }
        return rejectWithValue(error.response.data.deatail);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);