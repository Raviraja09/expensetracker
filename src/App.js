import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; 
import Welcome from "./Components/Welcome";
import ResetPasswordForm from "./Components/ResetPasswordForm";
import { getData, addExpenses } from "./Action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true;

function App() {
  const userId = useSelector((state) => state.auth.userId);
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getData(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (userId) {
      dispatch(addExpenses(expenses));
    }
  }, [dispatch, expenses, userId]);

  return (
    <Router>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ResetPasswordForm" element={<ResetPasswordForm />} />
    </Router>
  );
}

export default App;




