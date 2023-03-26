import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;

