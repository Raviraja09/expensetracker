import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import ExpensesReducer from "./ExpensesSlice";
import ThemeReducer from './ThemeSlice'
import ProfileReducer from './ProfileSlice'

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    expenses: ExpensesReducer,
    theme: ThemeReducer,
    profile: ProfileReducer
  },
});

export default Store;