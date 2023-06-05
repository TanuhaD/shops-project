import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  phone: "",
  adress: "",
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
    resetData: () => initialState,
  },
});
export const { changeName, changeEmail, changePhone, changeAdress, resetData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
