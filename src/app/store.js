import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
