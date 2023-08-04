
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Candidates from './component/candidates'; 
import Home from './component/home';
import Company from './component/company';
function App() {
  
  return (
    <Router>
    <Navbar/>
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="candidates" element={<Candidates/>}/>
        <Route path="company" element={<Company/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
