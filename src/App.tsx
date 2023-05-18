import React, { useState } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from "./pages/Home"
import OpticalStructures from "./pages/OpticalStructures"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpticalNumbers from './pages/OpticalNumbers';
import Footer from './components/Footer';
import LocalizedStrings from 'react-localization';

function App() {
  const [language, setLanguage] = useState('en');

  const pull_data = (data: string) => {
  setLanguage(data)
  }
  return (
    <>
      <Navbar language={language} func={pull_data}></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home language={language}/>} />
          <Route path="/structures" element={<OpticalStructures language={language}/>} />
          <Route path="/numbers" element={<OpticalNumbers language={language}/>} />
        </Routes>
      </Router>
      <Footer language={language}></Footer>
    </>
  );
}


export default App;
