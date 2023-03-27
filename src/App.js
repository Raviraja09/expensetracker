import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; 
import Welcome from "./Components/Welcome";
import ResetPassword from "./Components/ResetPassword";
import { Signup } from "./Components/Api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpeses, getData } from "./store/actions";

let isIntial = true;
function App() {
  const userId = useSelector((state) => state.auth.userId);
  const expenses = useSelector((state) => state.expenses);
  const dispacth = useDispatch();

  useEffect(() => {
    if (userId) {
      dispacth(getData(userId));
    }
  }, [dispacth, userId]);
  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    if (userId) {
      dispacth(addExpeses(expenses));
    }
  }, [dispacth, expenses, userId]);

function App() {
  return (
    <Router>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
    </Router>
  );
}
}
export default App;


