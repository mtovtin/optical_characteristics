import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from "./pages/Home"
import OpticalStructures from "./pages/OpticalStructures"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpticalNumbers from './pages/OpticalNumbers';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/structures" element={<OpticalStructures />} />
          <Route path="/numbers" element={<OpticalNumbers />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}


export default App;
