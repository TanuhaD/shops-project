import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://647aebf8d2e5b6101db0a5d3.mockapi.io/";
axios.defaults.baseURL = "https://nodejs-homework-demchenko.onrender.com/api/";

export const getShops = createAsyncThunk("shops/get", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("shops");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
