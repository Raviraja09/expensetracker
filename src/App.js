import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; 
import Welcome from "./Components/Welcome";

function App() {
  return (
    <Router>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
    </Router>
  );
}

export default App;


