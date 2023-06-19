
import '../styles/App.css';
import Homepage from '../components/Homepage.js'
import Propos from '../components/Propos.js'
import React from 'react';
import LoginForm from "../components/LoginForm.js";
import Photo2 from "../components/Photo2.js";
import SigninForm from "../components/SigninForm.js";

import "../styles/App2.scss";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div>
      
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/feed" element={<Photo2 />} />
      <Route path="/propos" element={<Propos />} />
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
