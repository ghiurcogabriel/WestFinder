import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" />
          <Route path="/login" element={<Login />}/>
        </Routes>
    </>
  );
}

export default App;
