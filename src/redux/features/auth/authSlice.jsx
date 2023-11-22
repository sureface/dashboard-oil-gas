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
  },
});

export const {
  loginReducer,
  signupReducer,
  loginCompanyReducer,
  loginCompanyWebReducer,
  loginSuperUserReducer,
  loginSuperUserWebReducer,
} = authSlice.actions;

export default authSlice.reducer;
