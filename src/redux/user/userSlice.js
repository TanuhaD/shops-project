import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  phone: "",
  adress: "",
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      return { ...state, name: payload };
    },

    changeEmail: (state, { payload }) => {
      return { ...state, email: payload };
    },
    changePhone: (state, { payload }) => {
      return { ...state, phone: payload };
    },
    changeAdress: (state, { payload }) => {
      return { ...state, adress: payload };
    },
    resetData: () => {
      return initialState;
    },
    setError: (state, { payload }) => {
      return { ...state, error: payload };
    },
  },
});
export const {
  changeName,
  changeEmail,
  changePhone,
  changeAdress,
  resetData,
  setError,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
