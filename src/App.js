import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; 
import Welcome from "./Components/Welcome";
import ResetPassword from "./Components/ResetPassword";
import { Signup } from "./Components/Api";

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
export default App;


