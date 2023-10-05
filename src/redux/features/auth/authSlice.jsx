import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: {
    login: "",
    password: "",
  },
  loggedInCompany: {
    login: "",
    password: "",
  },
  loggedInsuperUser: {
    login: "",
    password: "",
  },
  signupUser: {
    fullName: "",
    userName: "",
    companyName: "",
    email: "",
    number: 0,
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.loggedInUser = action.payload;
    },
    loginSuperUser: (state, action) => {
      state.loggedInsuperUser = action.payload;
    },
    signupReducer: (state, action) => {
      state.signupUser = action.payload;
    },
    loginCompanyReducer: (state, action) => {
      state.loggedInCompany = action.payload;
    },
  },
});

export const {
  loginReducer,
  signupReducer,
  loginCompanyReducer,
  loginSuperUser,
} = authSlice.actions;

export default authSlice.reducer;
