import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import permissionSlice from "./features/auth/permissionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    permission: permissionSlice,
  },
});

export default store;
