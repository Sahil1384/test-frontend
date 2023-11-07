import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
// import DepartReducer from "./features/departSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    // user: DepartReducer,
  },
});