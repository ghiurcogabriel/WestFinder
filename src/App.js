import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

//components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';

//routes
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
    </>
  );
}

export default App;
