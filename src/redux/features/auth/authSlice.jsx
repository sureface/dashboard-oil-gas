import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInCompany: {
    login: "",
    password: "",
  },
  loggedInCompanyWeb: {
    login: "",
    password: "",
  },
  loggedInsuperUser: {
    login: "",
    password: "",
  },
  loggedInsuperUserWeb: {
    login: "",
    password: "",
  },
  loggedInWorkers: {
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
    loginSuperUserReducer: (state, action) => {
      state.loggedInsuperUser = action.payload;
    },
    loginSuperUserWebReducer: (state, action) => {
      state.loggedInsuperUserWeb = action.payload;
    },
    signupReducer: (state, action) => {
      state.signupUser = action.payload;
    },
    loginCompanyReducer: (state, action) => {
      state.loggedInCompany = action.payload;
    },
    loginCompanyWebReducer: (state, action) => {
      state.loggedInCompanyWeb = action.payload;
    },
    loginWorkersReducer: (state, action) => {
      state.loggedInWorkers = action.payload;
    },
  },
});

export const {
  signupReducer,
  loginCompanyReducer,
  loginCompanyWebReducer,
  loginSuperUserReducer,
  loginSuperUserWebReducer,
  loginWorkersReducer,
} = authSlice.actions;

export default authSlice.reducer;
